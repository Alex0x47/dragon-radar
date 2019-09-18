import React, { Component } from 'react';
import { View, SafeAreaView, StyleSheet, Image } from 'react-native';

import { Button } from '../components';

import styles from '../styles/homeStyle';

/**
 * TODO HERE : 
 * - Make great buttons (with gradient IF gradient property is given)
 * - Use a DB typo
 * - Add 7 Dragon Balls png (with animation later) X
 * - Set a background ? X => to improve
 */

export default class Home extends Component {

    static navigationOptions = {
        header: null
      }


    goToSettings(){
        console.log("open settings modal");
    }

    play(){
        console.log("go to play screen");
        this.props.navigation.navigate('Radar');
    }

    render(){
        const { navigation } = this.props;
        console.log("rendering home compo", navigation);
        return(
            <SafeAreaView style={styles.container}>

                <View style={styles.container}>
                    <View style={styles.header}>
                        <Image
                            source={require('../assets/images/Dragon-Ball-Logo-Transparent-PNG.png')}
                            style={styles.db_logo}
                            resizeMode="contain"
                        />
                        <Image
                            source={require('../assets/images/radar_img.png')}
                            style={styles.db_radar_img}
                            resizeMode="contain"
                        />
                    </View>

                    <Image
                        source={require('../assets/images/dragon_balls2.png')}
                        style={styles.balls}
                        resizeMode="contain"
                    />
                    
                    <View style={styles.buttons}>
                        <Button 
                            theme='primary'
                            gradient
                            text='Play'
                            onPress={() => this.play()}
                        />
                        <Button 
                            theme='secondary'
                            gradient
                            text='Settings'
                            onPress={() => this.goToSettings()}
                        />
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
