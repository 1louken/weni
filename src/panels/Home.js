import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

import battom from '../img/battom.png';
import menu from '../img/menu.png';

import './Style.css';

function changeStyle(){
              document.getElementById('Battom1').style.width = '88%';
              document.getElementById('Battom1').style.margin = '51% auto auto auto';
           }

const Home = ({ id, go, fetchedUser, bat}) => (
	<Panel id={id}>
		<PanelHeader>Energy Coin</PanelHeader>
		<Group>
			<img className="Menu" src={menu}/>
			<Div className="Top_botton" onClick={go} data-to="top"></Div>
			<Div className="Trade_botton" onClick={go} data-to="trade"></Div>
			<Div className="Business_botton" onClick={go} data-to="business"></Div>
			<Div className="Shop_botton" onClick={go} data-to="shop"></Div>
			<img id="Battom1" className="Battom" src={battom} onClick='changeStyle'/>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Home;
