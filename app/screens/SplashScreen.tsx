/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {imageBackgroundStyle} from '../styles/General';

export default class SplashScreen extends Component {
  goToScreen(routeName) {
    this.props.navigation.navigate(routeName);
  }

  componentDidMount() {
    setTimeout(
      () => {
        this.goToScreen('Login');
      },
      2000,
      this,
    );
  }

  render() {
    return (
      <View style={imageBackgroundStyle.image}>
        <StatusBar translucent backgroundColor="rgba(0,0,0,0.2)" />

        <Animatable.Image
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite"
          style={{
            width: 300,
            height: 200,
            margin: 100,
          }}
          source={require('../resources/images/logo.png')}
        />
      </View>
    );
  }
}
