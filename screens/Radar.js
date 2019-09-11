import React, { Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, Dimensions, Image } from 'react-native';
import * as Location from 'expo-location';

import { game } from '../constants';
import { theme } from '../constants';

import GeoService from '../services/geoService';

const { width, height } = Dimensions.get('window');
const GEO_SERVICE = new GeoService();

export default class Radar extends Component {

    state = {
        dragon_balls: game.DRAGON_BALLS,
        userPos: {},
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
        //get user pos after component init
        GEO_SERVICE.getUserPositionFromAPI()
        .then(userPos => {
            this.state.userPos = userPos;
            this.state.dragon_balls = GEO_SERVICE.generateDragonBallsCoords(userPos);
            this.drawDragonBalls();
        }).catch(err => {
            //handle error here
        });
        setTimeout(() => {
            //     this.setState({dragon_balls: newDB, ...this.state});
            // let userPosition = this.state.geoService.getUserPosition();
            // this.drawDragonBalls();
        }, 1500);

        //watch position move
        Location.watchPositionAsync({timeInterval: 1000}, newLocation => {
            console.log("watch position changes", newLocation);
        });
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
        console.log('draw dragon balls', this.state.dragon_balls);
        let gridHeight = height - 45 - 20; //window height - dragon list height - safety border
        let gridWidth = width - 20; // window width - safety border
        
        //go on a 100 base
        let drawableWidth = Math.floor((gridWidth * 100) / gridHeight);
        console.log(`dimensions used to draw : 100m x ${drawableWidth}m`)

        //calculate distance with user in pixel
        const firstDB = this.state.dragon_balls[0];
        const latBetweenDB = this.state.userPos.latitude - firstDB.latitude;
        const longBetweenDB = this.state.userPos.longitude - firstDB.longitude;
        console.log("latBetweenDB", latBetweenDB);
        console.log("longBetweenDB", longBetweenDB);

        const distanceBtwn = GEO_SERVICE.distance(
            this.state.userPos.latitude,
            this.state.userPos.longitude,
            firstDB.latitude,
            firstDB.longitude
        );
        console.log("distance", distanceBtwn);

        //okay, so DB have to be between userLat - drawableWidth/2 and userLat + drawableWidth/2
        //and userLong - 50 and userLong + 50
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
                <View style={styles.dragonlist}>
                    {
                        this.state.dragon_balls.map(ball => {
                            return <Image key={ball.id} style={[styles.list_ball, ball.found ? styles.found_ball : null]} source={ball.image_path} />
                        })
                    }
                </View>
                    {this.generateGrid()}
                <View style={styles.userPosContainer}>
                    <View style={styles.userPos}>
                    </View>
                </View>
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