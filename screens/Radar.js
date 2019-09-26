import React, { Component } from 'react';
import { View, Text, Modal, ActivityIndicator, TouchableOpacity, SafeAreaView, StyleSheet, Dimensions, Image, Alert } from 'react-native';
import * as Location from 'expo-location';

import styles from '../styles/radarStyle';

import { game } from '../constants';
import { theme } from '../constants';

import GeoService from '../services/geoService';

const { width, height } = Dimensions.get('window');
const GEO_SERVICE = new GeoService();

import MapView,  { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

export default class Radar extends Component {

    state = {
        dragon_balls: game.DRAGON_BALLS,
        userPos: {},
        row_number: game.ZOOM_LEVELS[0].row,
        col_number: game.ZOOM_LEVELS[0].col,
        region:{
            latitude: 3.78825,
            longitude: -12.4324,
            latitudeDelta: 1,
            longitudeDelta: 1
        },
        gotPosition: true,
        viewLevel: 1,
        zoomLevel: game.ZOOM_LEVELS[0].zoom
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
            console.log("success", userPos);
            let generatedDB = GEO_SERVICE.generateDragonBallsCoords(userPos);

            const distanceDelta = Math.exp(Math.log(360) - (this.state.zoomLevel * Math.LN2));

            console.log("zoom to", this.state.zoomLevel);

            this.setState({
                userPos: userPos,
                dragon_balls: generatedDB,
                region: {
                    latitude: userPos.latitude,
                    longitude: userPos.longitude,
                    latitudeDelta: distanceDelta,
                    longitudeDelta: distanceDelta
                },
                gotPosition: true
            });
            console.log("new state", this.state);
            // this.drawDragonBalls();
        }).catch(err => {
            console.log("err", err);
            //handle error here
        });

        //watch position move
        Location.watchPositionAsync({accuracy: Location.Accuracy.High, distanceInterval: 0}, newLocation => {
            console.log("watch position changes", newLocation);
            this.state.dragon_balls.forEach(dragonBall => {
                if(dragonBall.showOnMap){ //only if ball is shown on map
                    const distanteToUser = GEO_SERVICE.distance(dragonBall.latitude, dragonBall.longitude, newLocation.coords.latitude, newLocation.coords.longitude);
                    console.log("distance", distanteToUser);
                    if(distanteToUser <= game.DISTANCE_TO_FIND_DB){ //user has found a dragon ball
                        Alert.alert("Congratulations ! You found the dragon ball n° " + dragonBall.id);
                        this.dragonBallFound(dragonBall.id);
                    }
                }
            }); 
        });
    }

    /**
     * Method called when a Dragon Ball is found by the user
     */
    dragonBallFound(dbId){
        let newDBs = JSON.parse(JSON.stringify(this.state.dragon_balls));
        let ballFound = newDBs.find(ball => ball.id == dbId);
        ballFound.found = true;
        ballFound.showOnMap = false;
    
        let dbFoundIndex = this.state.dragon_balls.findIndex(db => db.id == ballFound.id);
        newDBs[dbFoundIndex] = ballFound;

        this.setState({dragon_balls: newDBs});

        this.areAllDbFound();
    }

    /**
     * Verify if all dragon balls have been found
     * If so, do some action
     * NOT TESTED
     */
    areAllDbFound(){
        const dbFoundLength = this.state.dragon_balls.filter(db => db.found == true).length;
        if(dbFoundLength == 7){ //all dragon balls have been found
            Alert.alert("Congratulaions ! You found all the dragon balls !");
        }
    }
    
    /**
     * Change zoom level of grid
     */
    changeZoom(){
        GEO_SERVICE.getUserPositionFromAPI() //get new location to refresh region
        .then(userPos => {
            const newLevelId = this.state.viewLevel == game.ZOOM_LEVELS.length ? 1 : this.state.viewLevel + 1;
            const newViewLevel = game.ZOOM_LEVELS.find(level => level.id == newLevelId);
            const newDelta = Math.exp(Math.log(360) - (newViewLevel.zoom * Math.LN2));
    
            this.setState({
                viewLevel: newViewLevel.id,
                row_number: newViewLevel.row,
                col_number: newViewLevel.col,
                zoomLevel: newViewLevel.zoom,
                region:{
                    latitude: userPos.latitude,
                    longitude: userPos.longitude,
                    latitudeDelta: newDelta,
                    longitudeDelta: newDelta,
                }
            });
        });
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

                    {/* modal in hook? */}
                <Modal
                    transparent={true}
                    animationType={'none'}
                    visible={!this.state.gotPosition}
                    onRequestClose={() => {console.log('close modal')}}>
                    <View style={styles.modalBackground}>
                        <View style={styles.activityIndicatorWrapper}>
                        <ActivityIndicator
                            animating={!this.state.gotPosition} />
                        </View>
                    </View>
                    </Modal>
                
                {/* Voir pour le suivi de mapfollowsUserLocation */}
                    {this.generateGrid()}
                    { this.state.gotPosition && 
                    <MapView
                    // initialRegion={this.state.region}
                    // followsUserLocation={true}
                    // rotateEnabled={false}
                    style={{zIndex: 2, flex: 7}}
                    provider={PROVIDER_GOOGLE} //bug ?
                    customMapStyle={theme.MAP_STYLE_WITH_ROAD} //bug ?
                    showsUserLocation={true}
                    region={this.state.region}
                    > 
                        
                        {
                                this.state.dragon_balls.map(dragonBall => {
                                    return dragonBall.showOnMap ? 
                                        <Marker
                                        image={require('../assets/images/dragon_ball_point.png')}
                                        key={dragonBall.id}
                                        coordinate={dragonBall}
                                        /> 
                                    : null
                                })
                            }

                    </MapView>
                    }

                {/* <View style={styles.userPosContainer}>
                    <View style={styles.userPos}>
                    </View>
                </View> */}
            </SafeAreaView>
        )
    }
}