import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import {mainStyles} from '../styles/styles';
import MyTextInput from '../components/MyTextInput';
import ToolBar from '../components/ToolBar';
import color from '../styles/color';

function goToScreen(props, routeName) {
  props.navigation.navigate(routeName);
}

export default function RecuperarPasswordScreen(props) {
  return  (
    <ScrollView
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps="always"
      style={{backgroundColor: color.WHITE}}>
      <StatusBar backgroundColor={color.RED} translucent={true} />
      <ToolBar
        titulo="Senha"
        onPressLeft={() => goToScreen(props, 'Login')}
        iconLeft={require('../resources/images/back.png')}
       
      />
      <View style={[mainStyles.container, {padding: 50}]}>
        <Text style={mainStyles.titleText}> Esqueceu a {'\n'}senha</Text>
        <MyTextInput
          keyboardType="email-address"
          placeholder="E-mail"
          image="user"
        />

        <View style={mainStyles.btnMain}>
          <TouchableOpacity onPress={() => goToScreen(props, 'Login')}>
            <Text style={mainStyles.btntxt}>Recuperar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
