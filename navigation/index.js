import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation'

import Home from '../screens/Home';
// import Radar from '../screens/Radar';

const screens = createStackNavigator({
    Home
}); //define defaultNavifationOptions here

export default createAppContainer(screens);