import {StyleSheet} from 'react-native';
import {defaultTheme} from '../../../theme/defaultTheme';

export const white = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: defaultTheme.colors.green.green_g6,
    width: '100%',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 6,
  },

  mainContainerDisabled: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: defaultTheme.colors.green.green_g6_op_50,
    width: '100%',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 6,
  },

  buttonText: {
    fontFamily: defaultTheme.fonts.poppins.poppins_medium,
    fontSize: defaultTheme.fonts.font_size.font_size_f16,
    lineHeight: defaultTheme.fonts.font_size.font_size_f16 * 1.5,
    color: defaultTheme.colors.green.green_g1,
  },
});

export const dark = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: defaultTheme.colors.green.green_g6,
    width: '100%',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 6,
  },

  mainContainerDisabled: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: defaultTheme.colors.green.green_g6_op_50,
    width: '100%',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 6,
  },

  buttonText: {
    fontFamily: defaultTheme.fonts.poppins.poppins_medium,
    fontSize: defaultTheme.fonts.font_size.font_size_f16,
    lineHeight: defaultTheme.fonts.font_size.font_size_f16 * 1.5,
    color: defaultTheme.colors.black.black_b1,
  },
});
