import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';


import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';
import { theme } from '../constants';

/**
 * TODO :
 * Implements LinearGradient (return en error for the moment)
 */

class Button extends Component {
    render(){

        const {
            theme,
            gradient,
            text,
            children,
            ...props
        } = this.props;

        //dirty code... will have to change that
        const buttonStyles = eval(`styles.${theme}`);
        const buttonTextStyle = eval(`styles.${theme}_txt`);

        if(gradient){
            console.log(this.props)
            return(
                <TouchableOpacity
                {...props}
                    style={buttonStyles}
                >


                    
                    {/* <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}>
              <Text>
                  test
                  </Text>
              </LinearGradient> */}




                    <Text 
                        style={buttonTextStyle}
                    >
                        {text}
                    </Text>
                    {children}
                </TouchableOpacity>
            );
        }
        else{
            <TouchableOpacity
                    style={`styles.${theme}`}>
                    <Text style={`styles.${theme}_txt`}>
                        {text}
                    </Text>
                    {children}
                </TouchableOpacity>
        }
    }
}

export default Button;

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