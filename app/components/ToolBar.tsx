/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import color from '../styles/color';

export default function ToolBar(props) {
  return (
    <View
      style={[
        props.style,
        {height: 50, marginTop: 24, backgroundColor: color.RED},
      ]}>
      {props.titulo && (
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            marginTop: 12,
            textAlign: 'center',
            fontSize: 25,
            color: color.WHITE,
          }}>
          {props.titulo}
        </Text>
      )}
      {props.iconLeft && (
        <TouchableOpacity
          style={{position: 'absolute', left: 20, top: 15}}
          onPress={props.onPressLeft}>
          <Image
            style={{tintColor: color.WHITE, width: 30, height: 30}}
            source={props.iconLeft}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
