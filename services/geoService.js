import { game } from '../constants/index';

export default class GeoService {

    dragonBallCoords = [];
    userGeoData = {
        userLat = null,
        userLong = null
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
        return {
            lat: 0,
            long: 0
        };
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

    generateDragonBallsCoords(range = game.RANGE){

    }

}