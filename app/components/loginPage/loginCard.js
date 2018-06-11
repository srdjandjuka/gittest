import React from 'react';
import {View, StyleSheet} from 'react-native';


const LoginCard = (props) => {
    return (
        <View style = {styles.loginCardStyle}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    loginCardStyle : {
        flex : 3,
        //backgroundColor : 'black'
    }
});

export default LoginCard;