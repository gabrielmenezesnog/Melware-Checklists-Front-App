import React from 'react';
import {Pressable, Text} from 'react-native';

import {whiteTheme} from './Styles';

interface PrimaryButtonProps {
  text: string;
  onPress: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({text, onPress}) => {
  return (
    <Pressable onPress={onPress} style={whiteTheme.mainContainer}>
      <Text style={whiteTheme.buttonText}>{text}</Text>
    </Pressable>
  );
};

export default PrimaryButton;
