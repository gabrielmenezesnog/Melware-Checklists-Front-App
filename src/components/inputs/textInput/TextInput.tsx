import React, {useState} from 'react';
import {TextInput} from 'react-native';
import Animated, {useAnimatedStyle, withSpring} from 'react-native-reanimated';

// interfaces
import {iCustomTextInput} from '../../../interface/customTextInput/iCustomTextInput';

// Styles;
import {white, dark} from './Styles';
import {defaultTheme} from '../../../theme/defaultTheme';

// Redux
import {useSelector} from 'react-redux';

const CustomTextInput: React.FC<iCustomTextInput> = ({
  value,
  setValue,
  placeholder,
  isPassword,
}) => {
  const [isInputActive, setIsInputActive] = useState(false);
  const theme = useSelector((state: any) => state.themeReducer.theme);
  const style = theme === 'dark' ? dark : white;

  const springConfig = {
    damping: 15,
    stiffness: 80,
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      ...style.input,
      borderBottomWidth: 1,
      borderColor: isInputActive
        ? withSpring(defaultTheme.colors.green.green_g6, springConfig)
        : withSpring(defaultTheme.colors.gray.gray_g4, springConfig),
    };
  });

  const handlePressInput = () => {
    setIsInputActive(!isInputActive);
  };

  return (
    <Animated.View style={animatedStyle}>
      <TextInput
        placeholder={placeholder}
        onFocus={handlePressInput}
        onBlur={handlePressInput}
        onChangeText={setValue}
        value={value}
        secureTextEntry={isPassword}
        style={style.input}
        placeholderTextColor={
          theme === 'dark'
            ? defaultTheme.colors.gray.gray_g3
            : defaultTheme.colors.gray.gray_g6
        }
      />
    </Animated.View>
  );
};

export default CustomTextInput;
