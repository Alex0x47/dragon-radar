import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { theme } from '../constants';
// import { LinearGradient } from 'expo';

import { Button } from '../components';

import styles from '../styles/homeStyle';

// import LinearGradient from 'react-native-linear-gradient';

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

                {/* <TouchableOpacity>
  <LinearGradient start={[0, 0.5]}
                  end={[1, 0.5]}
                  colors={['#EFBB35', '#4AAE9B']}
                  style={{borderRadius: 5}}>
    <View style={styles.circleGradient}>
      <Text style={styles.visit}>Login</Text>
    </View>
  </LinearGradient>
</TouchableOpacity> */}




                    <Button 
                        theme='primary'
                        gradient
                        text='Play'
                        onPress={() => console.log("test")}
                    >
                        </Button>
                        
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

var stylesGradient = StyleSheet.create({
    linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5
    },
    buttonText: {
      fontSize: 18,
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
      backgroundColor: 'transparent',
    },
  });
