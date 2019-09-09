import { game } from '../constants/index';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default class GeoService {

    dragonBallCoords = [];
    userGeoData = {
        userLat: 0,
        userLong: 0
    }

    /**
     * Return last registred user position
     */
    getUserPosition(){
        return this.userGeoData;
    }

    /**
     * Get user position from geo API
     */
    async getUserPositionFromAPI(){
        let { status } = await Permissions.askAsync(Permissions.LOCATION);

        if (status !== 'granted') {
            //location permission not granted, handle error => show alert
            console.error("PERMISSION NOT GRANTED :/")
            return this.userGeoData; //return last known user pos (could be 0 0)
        }
        else{
            let location = await Location.getCurrentPositionAsync({});
            // console.log("GOT LOCATION", location);
            this.userGeoData.userLat = location.coords.latitude;
            this.userGeoData.userLong = location.coords.longitude;
            return location;
        }
    }

    /**
     * Set user position
     * @param {*} position 
     */
    setUserCoords(position){
        this.userGeoData.userLat = position.lat;
        this.userGeoData.long = position.long;
    }

    isUserOnDragonBall(){
        let foundDragonBalls = [];
        this.dragonBallCoords.map(dragonBall => {
            //test if DB coords are the same or so as the user ones.
            //if so, push the found DB id in foundDragonBalls array
        });
        return foundDragonBalls;
    }

    //for test purpose
    generateUserRandomCoords(){

    }

    /**
     * Verify if user's position has changed
     * If so, update their local position
     */
    async hasUserMoved(){
        let newUserPos = await this.getUserPositionFromAPI();
        if(
            newUserPos.lat != this.userGeoData.userLat &&
            newUserPos.long != this.userGeoData.userLong
        ){
            //position moved
            this.setUserCoords(newUserPos);
            //return found dragon balls if some have been found
            return this.isUserOnDragonBall();
        }
        else { //position hasn't changed
            return false;
        } 
    }




    getDragonBallCoords(id = null){

    }

    generateDragonBallsCoords(range){
        range = range || game.RANGE;

        const userPos = {
            latitude: this.userGeoData.lat,
            longitude: this.userGeoData.long
        };

        //npm install --save random-location
        //import randomLocation from 'random-location'

        while(this.dragonBallCoords.length < 7){
            const randomPoint = randomLocation.randomCirclePoint(userPos, range / 2);
            const newDBCoord = {
                id: this.dragonBallCoords.length ++,
                lat: randomPoint.latitude,
                long: randomPoint.longitude
            };
            this.dragonBallCoords = [newDBCoord, ...this.dragonBallCoords];
        }

        return this.dragonBallCoords;

    }

}