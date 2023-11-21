import {StyleSheet} from 'react-native';
import {defaultTheme} from '../../../theme/defaultTheme';

export const white = StyleSheet.create({
  input: {
    width: '100%',
    borderColor: defaultTheme.colors.gray.gray_g4,
    color: defaultTheme.colors.gray.gray_g8,
    fontFamily: defaultTheme.fonts.poppins.poppins_regular,
    fontSize: defaultTheme.fonts.font_size.font_size_f16,
    paddingBottom: 4,
  },
});

export const dark = StyleSheet.create({
  input: {
    width: '100%',
    borderColor: defaultTheme.colors.gray.gray_g4,
    color: defaultTheme.colors.gray.gray_g4,
    fontFamily: defaultTheme.fonts.poppins.poppins_regular,
    fontSize: defaultTheme.fonts.font_size.font_size_f16,
    paddingBottom: 4,
  },
});
