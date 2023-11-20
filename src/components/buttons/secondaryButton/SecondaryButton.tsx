import React from 'react';
import {Pressable, Text} from 'react-native';

import {whiteTheme} from './Styles';

interface SecondaryButtonProps {
  text: string;
  onPress: () => void;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({text, onPress}) => {
  return (
    <Pressable onPress={onPress} style={whiteTheme.mainContainer}>
      <Text style={whiteTheme.buttonText}>{text}</Text>
    </Pressable>
  );
};

export default SecondaryButton;
