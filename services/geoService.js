import { game } from '../constants';

import randomLocation from 'random-location'

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default class GeoService {
    
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
        }
        return new Promise((resolve, reject) => {
            if (status !== 'granted') {
                reject(location.coords);//fix that
            }
            else{
                console.log("PERM GRANTED");
                resolve(location.coords);
            }
        });
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

        let dragonBallsArray = [];

        //todo : test if user is not to close the the created dragon ball
        game.DRAGON_BALLS.map(dragonBall => {
            const randomPoint = randomLocation.randomCirclePoint(userPos, range / 2);
            let dragonBallObject = {
                latitude: randomPoint.latitude,
                longitude: randomPoint.longitude,
                ...dragonBall
            }
            dragonBallsArray = [dragonBallObject, ...dragonBallsArray];
        });

        return dragonBallsArray.reverse();
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