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

const Home = ({ id, go, fetchedUser}) => (
	<Panel id={id}>
		<PanelHeader>Energy Coin</PanelHeader>

		<Group title="Navigation Example">
			<Div>
				<img className="Menu" src={menu}/>
				<Div className="Buttom_one" onClick={go} data-to="persik">
				</Div>
				<Div className="Buttom_two" onClick={go} data-to="example">
				</Div>
				<Div className="Buttom_three" onClick={go} data-to="example">
				</Div>
				<Div className="Buttom_four" onClick={go} data-to="example">
				</Div>
			</div>
			<Div>
				<img className="Battom" src={battom}/>
			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Home;
