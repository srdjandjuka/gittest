import React from 'react';
import {View, StyleSheet} from 'react-native';
import Logo from '../components/loginPage/logo'
import LoginCard from '../components/loginPage/loginCard'; 
import RegistrationCard from '../components/loginPage/registrationCard';
import LoginView from '../components/loginPage/loginView';
import RegistrationView from '../components/loginPage/registrationView';
import TextField from '../components/loginPage/textField';
import LoginButton from '../components/loginPage/loginButton';
import constants from '../utils/constants';

export default class LoginScreen extends React.Component {

    state = {email : '', password : ''};

    render() {
        return(
            <View style={styles.container}> 
                <Logo/>
                <LoginCard> 
                    <LoginView>
                        <TextField
                            value = {this.state.email}
                            placeholder = "Email"
                            secureTextEntry = {false}
                            onTextChange = {email => this.setState(email)}
                        />
                        <TextField
                            value = {this.state.password}
                            placeholder = "Lozinka"
                            secureTextEntry = {true}
                            onTextChange = {password => this.setState(password)}
                        />
                        <LoginButton 
                            buttonStyle = {constants.BUTTON_STYLE.LOGIN} 
                            text = "PRIJAVA"
                        />
                        <LoginButton 
                            buttonStyle = {constants.BUTTON_STYLE.SIMPLE} 
                            text = "Zaboravili ste lozinku?"
                        />
                    </LoginView>
                </LoginCard>
                <RegistrationCard> 
                    <RegistrationView> 
                        <LoginButton 
                            buttonStyle = {constants.BUTTON_STYLE.SIMPLE} 
                            text = "Nemate nalog?"
                        />
                        <LoginButton 
                            buttonStyle = {constants.BUTTON_STYLE.REGISTRATION} 
                            text = "REGISTRUJTE SE"
                        />
                    </RegistrationView>
                </RegistrationCard>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
      flex : 1,
      backgroundColor : '#E93E37'
    }
  });