import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const TextField = ({value, placeholder, onTextChange, secureTextEntry}) => {
    return (
        <View style = {styles.textFieldContainer}> 
            <TextInput
                value = {value}
                placeholder = {placeholder}
                placeholderTextColor = 'white'
                secureTextEntry = {secureTextEntry}
                onTextChange = {onTextChange}
                style = {styles.textFieldStyle}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textFieldContainer : {
        height : 40,
        width : null,
        borderBottomWidth: 2,
        borderColor : 'white',
        marginBottom : 30,
        justifyContent : 'flex-end',
        paddingBottom : 5
    },

    textFieldStyle : {
        fontSize : 20,
        color : 'white'
        
    }
});

export default TextField;