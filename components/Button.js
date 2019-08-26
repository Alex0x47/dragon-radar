import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo';

import { StyleSheet } from 'react-native';
import { theme } from '../constants';

export default class Button extends Component {
    render(){

        if(this.props.gradient){
            return(
                <TouchableOpacity
                    style={`styles.gradient_${this.props.theme}`}
                >
                    <LinearGradient
                        // start={start}
                        // end={end}
                        // locations={locations}
                        // style={buttonStyles}
                        // colors={[startColor, endColor]}
                    >
                    </LinearGradient>
                    {/* Add LinearGradient here  */}
                    <Text 
                        style={`styles.${this.props.theme}_txt`}
                    >
                        {this.props.text}
                    </Text>
                </TouchableOpacity>
            );
        }
        else{
            <TouchableOpacity
                    style={`styles.${this.props.theme}`}>
                    <Text style={`styles.${this.props.theme}_txt`}>
                        {this.props.text}
                    </Text>
                </TouchableOpacity>
        }
    }
}

const styles = StyleSheet.create({
    primary:{
        alignItems: 'center',
        backgroundColor: theme.BUTTONS.primary.bg_color,
        padding: theme.BUTTONS.primary.padding,
        borderRadius: 10,
        margin: 10
    },
    gradient_primary: {
        alignItems: 'center',
        backgroundColor: theme.BUTTONS.primary.bg_color,
        padding: theme.BUTTONS.primary.padding,
        borderRadius: 10,
        margin: 10
    },
    primary_txt: {
        color: theme.BUTTONS.primary.txt_color,
        fontSize: 20,
        fontWeight: 'bold'
    },
    secondary:{
        alignItems: 'center',
        backgroundColor: theme.BUTTONS.secondary.bg_color,
        padding: theme.BUTTONS.secondary.padding,
        borderRadius: 10,
        margin: 10
    },
    gradient_secondary: {
        alignItems: 'center',
        backgroundColor: theme.BUTTONS.secondary.bg_color,
        padding: theme.BUTTONS.secondary.padding,
        borderRadius: 10,
        margin: 10
    },
    secondary_txt:{
        color: theme.BUTTONS.secondary.txt_color,
        fontSize: 20,
        fontWeight: 'bold'
    }
});