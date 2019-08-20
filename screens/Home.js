import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

import { theme } from '../constants';

import styles from '../styles/homeStyle';

export default class Home extends Component {

    render(){
        const { navigation } = this.props;
        console.log("rendering home compo", navigation);
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Dragon Radar </Text>
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity
                        style={styles.play_button}
                        onPress={() => {console.log("play !")}}
                    >
                        <Text style={styles.play_button_txt}>
                            Play
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.settings_button}
                        onPress={() => {console.log("play !")}}
                    >
                        <Text style={styles.settings_button_txt}>
                            Settings
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
