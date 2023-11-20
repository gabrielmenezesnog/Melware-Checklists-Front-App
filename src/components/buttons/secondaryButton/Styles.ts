import {StyleSheet} from 'react-native';
import {defaultTheme} from '../../../theme/defaultTheme';

export const whiteTheme = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: defaultTheme.colors.green.green_g2,
    width: '100%',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 6,
  },

  buttonText: {
    fontFamily: defaultTheme.fonts.poppins.poppins_medium,
    fontSize: defaultTheme.fonts.font_size.font_size_f2,
    lineHeight: defaultTheme.fonts.font_size.font_size_f2 * 1.5,
    color: defaultTheme.colors.green.green_g6,
  },
});

export const blackTheme = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: defaultTheme.colors.black.black_b1,
  },
});
