import React from 'react';
import {Pressable, Text} from 'react-native';

import {white, dark} from './Styles';
import {useSelector} from 'react-redux';

interface iSecondaryButton {
  text: string;
  onPress: () => void;
}

const SecondaryButton: React.FC<iSecondaryButton> = ({text, onPress}) => {
  const theme = useSelector((state: any) => state.themeReducer.theme);
  const style = theme === 'dark' ? dark : white;

  return (
    <Pressable onPress={onPress} style={style.mainContainer}>
      <Text style={style.buttonText}>{text}</Text>
    </Pressable>
  );
};

export default SecondaryButton;
