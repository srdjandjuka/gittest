import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';



const Logo = () => {
    return (
        <View style={styles.logoStyle}>
            <Image style={{height: 45, width : 200}} source = {require('../../assets/images/login.png')} resizeMode="contain"/>
        </View>
    );
};

const styles = StyleSheet.create({
    logoStyle : {
        flex : 1,
        alignItems : 'center',
        marginTop : 40
    }
});

export default Logo;