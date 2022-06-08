import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import {mainStyles, registroStyles} from '../styles/styles';
import MyTextInput from '../components/MyTextInput';
import ToolBar from '../components/ToolBar';
import color from '../styles/color';
import {CheckBox, SocialIcon, Button} from 'react-native-elements';

function goToScreen(props, routeName) {
  props.navigation.navigate(routeName);
}

export default function RegistroScreen(props) {
  const [hidePassword, setHidePassword] = useState(false);

  return (
    <ScrollView
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps="always"
      style={{backgroundColor: color.WHITE}}>
      <StatusBar backgroundColor={color.RED} translucent={true} />
      <ToolBar
        titulo="Check-in"
        onPressLeft={() => goToScreen(props, 'Login')}
        iconLeft={require('../resources/images/back.png')}
      />
      <View style={[mainStyles.container, {padding: 50}]}>
        <Text style={mainStyles.titleText}> Crea tu Cuenta</Text>
        <MyTextInput placeholder="Nomes" image="user" />
        <MyTextInput placeholder="Sobrenomes" image="user" />
        <MyTextInput
          keyboardType="email-address"
          placeholder="E-mail"
          image="envelope"
        />
        <MyTextInput
          keyboardType={null}
          placeholder="Senha"
          onPress={() => setHidePassword(!hidePassword)}
          keyboardType={null}
          image="lock"
          bolGone={true}
          secureTextEntry={hidePassword}
        />
        <CheckBox
          containerStyle={registroStyles.checkBox}
          textStyle={{color: color.BLACK}}
          title="Li e aceito os termos e condições"
          checked={false}
          checkedColor={color.BLUE}
        />
        <View style={mainStyles.btnMain}>
          <TouchableOpacity onPress={() => goToScreen(props, 'Login')}>
            <Text style={mainStyles.btntxt}>Registrarse</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color: color.RED}}>¿Ya tienes una cuenta? </Text>
          <Button
            title="Inicia Sesión"
            onPress={() => goToScreen(props, 'Login')}
            type="clear"
          />
        </View>
        <View style={registroStyles.containerSocial}>
          <SocialIcon
            style={registroStyles.buttonSocialIcon}
            title="Login com Facebook"
            button
            type="facebook"
          />
          <SocialIcon
            style={registroStyles.buttonSocialIcon}
            title="Login com Google"
            button
            type="google-plus-official"
          />
        </View>
      </View>
    </ScrollView>
  );
}
