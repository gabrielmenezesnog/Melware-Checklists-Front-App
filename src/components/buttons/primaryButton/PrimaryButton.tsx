import React from 'react';
import {Pressable, Text} from 'react-native';

import {white, dark} from './Styles';
import {useSelector} from 'react-redux';

interface iPrimaryButton {
  text: string;
  onPress: () => void;
}

const PrimaryButton: React.FC<iPrimaryButton> = ({text, onPress}) => {
  const theme = useSelector((state: any) => state.themeReducer.theme);
  const style = theme === 'dark' ? dark : white;

  return (
    <Pressable onPress={onPress} style={style.mainContainer}>
      <Text style={style.buttonText}>{text}</Text>
    </Pressable>
  );
};

export default PrimaryButton;
