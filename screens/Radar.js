import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Dimensions, Image } from 'react-native';
const { width, height } = Dimensions.get('window');

import { game } from '../constants';

import { theme } from '../constants';

import GeoService from '../services/geoService';

export default class Radar extends Component {

    state = {
        geoService: new GeoService(),
        dragon_balls: game.DRAGON_BALLS
    };

    static navigationOptions = {
        // headerStyle: {
        //     backgroundColor: theme.COLORS.secondary,
        // }
        header: null
        
    }

    componentDidMount(){

        //emulate a dragon ball the user find
        let ballFound = this.state.dragon_balls.find(ball => ball.id == 3);
        ballFound.found = true;

        let dbFoundIndex = this.state.dragon_balls.findIndex(db => db.id == ballFound.id);
        let newDB = this.state.dragon_balls;
        newDB[dbFoundIndex] = ballFound;

        setTimeout(() => {
            this.setState({dragon_balls: newDB, ...this.state});
        }, 3000);

    }

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
            <SafeAreaView style={styles.container}>
                <View style={styles.dragonlist}>
                    {
                        this.state.dragon_balls.map(ball => {
                            return <Image key={ball.id} style={[styles.list_ball, ball.found ? styles.found_ball : null]} source={ball.image_path} />
                        })
                    }
                </View>
                <View style={styles.radar}>
                    <Text>
                        RADAR CONTENT
                    </Text>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.COLORS.green_bg,
        justifyContent: 'center'
    },
    dragonlist: { //parent
        flex: 1,
        flexDirection: 'row',
        backgroundColor: theme.COLORS.secondary,
        alignItems: 'center', //horizontal align magic
        justifyContent:'center' //vertical align magic
    },
    list_ball: {
        width: 45,
        height: 45,
        margin: 4,
        opacity: 0.5
    },
    found_ball: {
        opacity: 1
    },
    text: {
    },
    radar: {
        flex: 7,
        alignItems: 'center'
    }
})