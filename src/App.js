import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import Example from './panels/Example';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const mysql = require('mysql2');

	const connection = mysql.createConnection({
		host: 'forane.mysql.pythonanywhere-services.com',
		user:'forane',
		password:'Tosha3301Alex2005',
		database:'forane$fnor'
	});

	function add() {	
		connection.query("INSERT INTO slovar (inpus, answes) VALUES (0, 0)", function(err, results) {
    		if(err) console.log(err);
    		else console.log("Данные добавлены");
    		connection.commit()
		});
	};

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<View activePanel={activePanel} popout={popout}>
			<Home id='home' fetchedUser={fetchedUser} go={go} add()={add}/>
			<Persik id='persik' go={go} />
			<Example id='example' go={go} />
		</View>
	);
}

export default App;

