import React from 'react';
import {View, StyleSheet} from 'react-native';

const LoginView = (props) => {
    return (
        <View style={styles.loginViewStyle}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    loginViewStyle : {
        flex : 1,
        margin : 30,
        //backgroundColor : 'yellow'
    }
});

export default LoginView;