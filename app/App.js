
import React from 'react';
import { Actions, Router, Scene } from 'react-native-router-flux';
import LoginScreen from './screens/LoginScreen';

const scenes = Actions.create(
  <Scene key="root" hideNavBar={true}>
    <Scene key="login" title="Login" component={LoginScreen} initial={true} />
  </Scene>
);

export default class App extends React.Component {
  render() {
    return <Router scenes={scenes} />;
  }
}



