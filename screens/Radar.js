import React, { Component } from 'react';
import { View, Text } from 'react-native';

import GeoService from '../services/geoService';

export default class Radar extends Component {

    state = {
        geoService: new GeoService()
    };

    // componentDidMount(){

    // }

    drawDragonBalls(){

    }

    startGame(){

        //every x seconds
        //let updateResult = this.state.geoService.hasUserMoved();
        //updateResult contains found dragon balls, so if not empty animate the screen
    }

    hasUserMoved(){

    }

    render(){
        return (
            <View>
                <Text>Dragon Radar - (Liste des dragons balls trouvées et non trouvées en opacité 0.7)</Text>
                <Text>Radar avec background</Text>
            </View>
        )
    }
}