import React from 'react';
import {View, StyleSheet} from 'react-native';

const RegistrationCard = (props) => {
    return (
        <View style = {styles.registrationCardStyle}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    registrationCardStyle : {
        flex : 2,
        //backgroundColor : 'green'
    }
});

export default RegistrationCard;