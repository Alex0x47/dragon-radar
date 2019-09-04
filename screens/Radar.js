import React, { Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, Dimensions, Image } from 'react-native';
const { width, height } = Dimensions.get('window');

import { game } from '../constants';

import { theme } from '../constants';

import GeoService from '../services/geoService';


export default class Radar extends Component {

    state = {
        geoService: new GeoService(),
        dragon_balls: game.DRAGON_BALLS,
        row_number: game.ROW_NUMBER,
        col_number: game.COLUMNS_NUMBER
    };

    static navigationOptions = {
        headerStyle: {
            backgroundColor: theme.COLORS.secondary,
            height: height / 14
        },
        headerTitle:  <Image
            source={require('../assets/images/radar_img.png')}
            style={{ width: 120, height: 70 }}
        />
        
    }

    componentDidMount(){
        setTimeout(() => {
            //     this.setState({dragon_balls: newDB, ...this.state});
        }, 3000);
        // 
    }

    /**
     * Method called when a Dragon Ball is found by the user
     */
    findDragonBall(dbId){
        let ballFound = this.state.dragon_balls.find(ball => ball.id == dbId);
        ballFound.found = true;
    
        let dbFoundIndex = this.state.dragon_balls.findIndex(db => db.id == ballFound.id);
        let newDB = this.state.dragon_balls;
        newDB[dbFoundIndex] = ballFound;
    }
    
    /**
     * Change zoom level
     */
    changeZoom(){
        let newColNumber = this.state.col_number == 12 ? 9 : 12;
        let newRowNumber = this.state.row_number == 18 ? 12 : 18;
        this.setState({row_number: newRowNumber, col_number: newColNumber});

        // this.findDragonBall(4);
        //emulate a dragon ball the user find
    }

    /**
     * Draw Dragon Balls on screen
     */
    drawDragonBalls(){

    }

    /**
     * Start game
     */
    startGame(){

        //every x seconds
        //let updateResult = this.state.geoService.hasUserMoved();
        //updateResult contains found dragon balls, so if not empty animate the screen
    }

    /**
     * Periodically check if user has moved
     */
    hasUserMoved(){

    }

    /**
     * Generate row of radar's grid
     */
    generateRows(){
        let rows = [];
        for(let i = 0 ; i < this.state.col_number ; i ++){
            rows.push(<View key={i} style={styles.radar_square}></View>);
        }
        return rows;
    }

    /**
     * Generate cols of radar's grid
     */
    generateColumns(){
        let cols = [];
        for(let i = 0 ; i < this.state.row_number ; i++){
            cols.push(<View key={i} style={styles.radar_row}>{this.generateRows()}</View>);
        }
        console.log("cols", cols);
        return cols;
    }

    /**
     * Generate radar's grid
     */
    generateGrid() {
        return(
            <TouchableOpacity style={styles.radar_container} onPress={() => this.changeZoom()}>
                {this.generateColumns()}
            </TouchableOpacity>
        );
    }

    render(){
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.userPosContainer}>
                    <View style={styles.userPos}>
                    </View>
                </View>
                <View style={styles.dragonlist}>
                    {
                        this.state.dragon_balls.map(ball => {
                            return <Image key={ball.id} style={[styles.list_ball, ball.found ? styles.found_ball : null]} source={ball.image_path} />
                        })
                    }
                </View>
                    {this.generateGrid()}
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.COLORS.secondary,
        justifyContent: 'center',
    },
    dragonlist: { //parent
        flex: 1,
        // borderRadius: 20,
        // marginTop: height / 20,
        flexDirection: 'row',
        backgroundColor: theme.COLORS.green_bg,
        alignItems: 'center', //horizontal align magic
        justifyContent:'center' //vertical align magic
    },
    list_ball: {
        width: 45,
        height: 45,
        margin: 4,
        opacity: 0.3
    },
    found_ball: {
        opacity: 1
    },
    text: {
    },
    radar_container: {
        flex: 7,
        // alignItems: 'center'
    },
    radar_row:{
        flex: 1,
        borderColor: 'black',
        flexDirection: 'row',
        borderWidth: .3
    },
    radar_square:{
        flex: 1,
        flexDirection: 'column',
        borderColor: 'black',
        borderWidth: .3
    },
    userPosContainer: {
        position: 'absolute',
        justifyContent:'center',
        alignItems: 'center',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    userPos: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderRightWidth: 12,
        borderBottomWidth: 24,
        borderLeftWidth: 12,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'red',
        borderLeftColor: 'transparent',
    }
})