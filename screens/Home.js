import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

import { theme } from '../constants';

import { Button } from '../components';

import styles from '../styles/homeStyle';

/**
 * TODO HERE : 
 * - Make great buttons (with gradient IF gradient property is given)
 * - Use a DB typo
 * - Add 7 Dragon Balls png (with animation later)
 * - Set a background ?
 */

export default class Home extends Component {

    goToSettings(){
        console.log("open settings modal");
    }

    play(){
        console.log("go to play screen");
    }

    render(){
        const { navigation } = this.props;
        console.log("rendering home compo", navigation);
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Dragon Radar </Text>
                </View>
                <View style={styles.buttons}>

                    {/* <TouchableOpacity
                        style={styles.play_button}
                        onPress={this.play()}
                        >
                        <Text style={styles.play_button_txt}>
                        Play
                        </Text>
                    </TouchableOpacity> */}

                    <Button 
                        theme='primary'
                        gradient
                        text='Play'
                        onPress={() => this.play()}
                    />

                    {/* <TouchableOpacity
                        style={styles.settings_button}
                        onPress={() => this.goToSettings()}
                    >
                        <Text style={styles.settings_button_txt}>
                            Settings
                        </Text>
                    </TouchableOpacity> */}

                    <Button 
                        theme='secondary'
                        gradient
                        text='Settings'
                        onPress={() => this.goToSettings()}
                    />

                </View>
            </View>
        );
    }
}
