import React from 'react';
import { Image } from 'react-native';
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
	headerBackImage: <Image source={require('../assets/images/back.png')} />,
	headerBackTitle: null,
	headerLeftContainerStyle: {
		alignItems: 'center',
		marginLeft: 20
	}
}}
);

export default createAppContainer(screens);