import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import constants from '../../utils/constants';

const LoginButton = ({buttonStyle, text}) => {

    const {loginButtonStyle, registrationButtonStyle, textStyleLogin, textStyleRegistration, simpleButtonStyle, textStyleSimple} = styles;

    switch(buttonStyle) {
        case constants.BUTTON_STYLE.LOGIN : 
            return (
                <TouchableOpacity style = {loginButtonStyle}> 
                    <Text style = {textStyleLogin}> {text} </Text> 
                </TouchableOpacity>
            );
        case constants.BUTTON_STYLE.REGISTRATION :
            return (
                <TouchableOpacity style = {registrationButtonStyle}> 
                    <Text style = {textStyleRegistration}> {text} </Text> 
                </TouchableOpacity>
            );
        default : 
            return (
                <TouchableOpacity style = {simpleButtonStyle}> 
                    <Text style = {textStyleSimple}> {text} </Text> 
                </TouchableOpacity>
            );
    }
    
};

const styles = StyleSheet.create({
    loginButtonStyle : {
        height : 40,
        width : null,
        backgroundColor : 'white',
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 4
    },

    registrationButtonStyle : {
        height : 40,
        width : null,
        alignItems : 'center',
        justifyContent : 'center',
        borderWidth : 1.5,
        borderColor : 'white',
        borderRadius : 4,
        marginTop : 10
    },

    simpleButtonStyle : {
        alignItems : 'center',
        justifyContent : 'center',
        marginTop : 10
    },

    textStyleLogin : {
        color : '#E93E37'
    },

    textStyleRegistration : {
        color : 'white'
    },

    textStyleSimple : {
        color : 'white',
        fontSize : 12
    }
});

export default LoginButton;