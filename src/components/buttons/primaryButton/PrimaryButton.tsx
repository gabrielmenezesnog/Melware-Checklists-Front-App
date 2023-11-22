import React from 'react';
import {ActivityIndicator, Pressable, Text} from 'react-native';

import {white, dark} from './Styles';
import {useSelector} from 'react-redux';

interface iPrimaryButton {
  text: string;
  onPress: () => void;
  isDisabled?: boolean;
  loading?: boolean;
}

const PrimaryButton: React.FC<iPrimaryButton> = ({
  text,
  onPress,
  isDisabled,
  loading,
}) => {
  const theme = useSelector((state: any) => state.themeReducer.theme);
  const style = theme === 'dark' ? dark : white;

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled || loading}
      style={isDisabled ? style.mainContainerDisabled : style.mainContainer}>
      {loading ? (
        <ActivityIndicator size="small" color={style.buttonText.color} />
      ) : (
        <Text style={style.buttonText}>{text}</Text>
      )}
    </Pressable>
  );
};

export default PrimaryButton;
