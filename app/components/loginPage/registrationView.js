import React from 'react';
import {View, StyleSheet} from 'react-native';

const RegistrationView = (props) => {
    return (
        <View style={styles.registrationViewStyle}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    registrationViewStyle : {
        flex : 1,
        margin : 30,
        //backgroundColor : 'yellow',
        justifyContent : 'center'
    }
});

export default RegistrationView;