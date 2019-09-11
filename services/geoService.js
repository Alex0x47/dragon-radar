import { game } from '../constants/index';

import randomLocation from 'random-location'

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
        let location;

        if (status !== 'granted') {
            //location permission not granted, handle error => show alert
            console.error("PERMISSION NOT GRANTED :/")
        }
        else{
            location = await Location.getCurrentPositionAsync({});
            // this.userGeoData.userLat = location.coords.latitude;
            // this.userGeoData.userLong = location.coords.longitude;
        }
        return new Promise((resolve, reject) => {
            if (status !== 'granted') {
                reject(location.coords);//return last known user pos (could be 0 0)
            }
            else{
                console.log("PERM GRANTED");
                resolve(location.coords);
            }
        });
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

    /**
     * Generate dragon ball positions with user location
     * @param {*} userPosition 
     * @param {*} range 
     */
    generateDragonBallsCoords(userPosition, range){
        console.log("GENERATE DB COORDS", arguments);
        range = range || game.RANGE;

        const userPos = {
            latitude: userPosition.latitude,
            longitude: userPosition.longitude
        };

        console.log("generatig with user pos", userPos, "and range", range);

        while(this.dragonBallCoords.length < 7){
            const randomPoint = randomLocation.randomCirclePoint(userPos, range / 2);
            const newDBCoord = {
                id: this.dragonBallCoords.length + 1,
                latitude: randomPoint.latitude,
                longitude: randomPoint.longitude
            };
            this.dragonBallCoords = [newDBCoord, ...this.dragonBallCoords];
        }
        return this.dragonBallCoords;
    }


    /**
     * Calculate distance between 2 points
     * here between user and a DB
     * credits : https://snipplr.com/view/25479/calculate-distance-between-two-points-with-latitude-and-longitude-coordinates/
     * bit modified to return only in metres as an int
     * @param {*} lat1 
     * @param {*} lon1 
     * @param {*} lat2 
     * @param {*} lon2 
     */
    distance(lat1,lon1,lat2,lon2) {
        let R = 6371; // km (change this constant to get miles)
        let dLat = (lat2-lat1) * Math.PI / 180;
        let dLon = (lon2-lon1) * Math.PI / 180;
        let a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180 ) * Math.cos(lat2 * Math.PI / 180 ) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        let d = R * c;
        // if (d>1) return Math.round(d)+"km";
        // else if (d<=1) return Math.round(d*1000)+"m";
        return Math.round(d*1000);
        // return d;
    }

}