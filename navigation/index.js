import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation'

import Home from '../screens/Home';
import Radar from '../screens/Radar';

const screens = createStackNavigator({
	Home: Home,
	Radar: Radar,
}, {
	defaultNavigationOptions: {
	headerStyle: {
		borderBottomColor: "transparent",
		elevation: 0, // for android
	},
	headerBackTitle: null
}}
);

export default createAppContainer(screens);