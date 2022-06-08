/* eslint-disable react-native/no-inline-styles */
import React, {useState, useContext} from 'react';
import {Text, View, TouchableOpacity, StatusBar, Image} from 'react-native';
import {mainStyles, loginStyles} from '../styles/styles';
import MyTextInput from '../components/MyTextInput';
import MyButton from '../components/MyButton';
import color from '../styles/color';
import {UsuarioContext} from '../context/UsuarioContext';

export default function LoginScreen(props) {
  const [login, loginAction] = useContext(UsuarioContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(false);

  return (
    <View style={[mainStyles.container, {padding: 50}]}>
      <StatusBar backgroundColor={color.RED} translucent={true} />
      <View style={loginStyles.logo}>
        <Image
          source={require('../resources/images/logo.png')}
          style={{height: 100, width: 150}}
        />
      </View>
      <MyTextInput
        keyboardType="email-address"
        placeholder="E-mail"
        image="user"
        value={email}
        onChangeText={email => setEmail(email)}
      />
      <MyTextInput
        keyboardType={null}
        placeholder="Contraseña"
        image="lock"
        bolGone={true}
        secureTextEntry={hidePassword}
        onPress={() => setHidePassword(!hidePassword)}
        value={password}
        onChangeText={password => setPassword(password)}
      />
      <MyButton titulo="Login" onPress={() => iniciarSesion()} />

      <View>
        <TouchableOpacity
          onPress={() => goToScreen('RecuperarPassword')}>
          <Text
            style={[
              mainStyles.txtTransparent
            ]}>
            Esqueceu a senha?
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => goToScreen('Registro')}>
          <Text
            style={[
              mainStyles.txtTransparent,
              {textDecorationLine: 'underline'},
            ]}>
            Criar nova conta
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  function iniciarSesion() {
    loginAction({
      type: 'sign',
      data: {
        email,
        password,
      },
    });
    goToScreen('Principal');
  }

  function goToScreen(routeName) {
    props.navigation.navigate(routeName);
  }
}
