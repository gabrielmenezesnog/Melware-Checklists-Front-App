import React from 'react';
import {ActivityIndicator, Pressable, Text} from 'react-native';

import {white, dark} from './Styles';
import {useSelector} from 'react-redux';
import {defaultTheme} from '../../../theme/defaultTheme';

interface iPrimaryButton {
  text: string;
  onPress: () => void;
  isDisabled?: boolean;
  loading?: boolean;
  error?: boolean;
}

const PrimaryButton: React.FC<iPrimaryButton> = ({
  text,
  onPress,
  isDisabled,
  loading,
  error,
}) => {
  const theme = useSelector((state: any) => state.themeReducer.theme);
  const style = theme === 'dark' ? dark : white;

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled || loading}
      style={[
        isDisabled ? style.mainContainerDisabled : style.mainContainer,
        error
          ? {
              backgroundColor: defaultTheme.colors.red.red_error_op,
            }
          : null,
      ]}>
      {loading ? (
        <ActivityIndicator size="small" color={style.buttonText.color} />
      ) : (
        <Text
          style={[
            style.buttonText,
            error
              ? {
                  color: defaultTheme.colors.red.red_error,
                }
              : null,
          ]}>
          {text}
        </Text>
      )}
    </Pressable>
  );
};

export default PrimaryButton;
