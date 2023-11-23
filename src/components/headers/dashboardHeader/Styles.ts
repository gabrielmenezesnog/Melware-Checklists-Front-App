import {StyleSheet} from 'react-native';
import {defaultTheme} from '../../../theme/defaultTheme';

export const white = StyleSheet.create({
  mainContainer: {
    backgroundColor: defaultTheme.colors.black.black_b1,
  },

  title: {
    fontFamily: defaultTheme.fonts.poppins.poppins_medium,
    fontSize: defaultTheme.fonts.font_size.font_size_f40,
    lineHeight: defaultTheme.fonts.font_size.font_size_f40 * 1.5,
    color: defaultTheme.colors.gray.gray_g1,
    marginTop: defaultTheme.size.size_s60,
    marginHorizontal: defaultTheme.size.size_s40,
    marginBottom: 4,
  },

  subtitle: {
    fontFamily: defaultTheme.fonts.roboto.roboto_regular,
    fontSize: defaultTheme.fonts.font_size.font_size_f16,
    lineHeight: defaultTheme.fonts.font_size.font_size_f16 * 1.2,
    color: defaultTheme.colors.gray.gray_g4,
    marginHorizontal: defaultTheme.size.size_s40,
    marginBottom: defaultTheme.size.size_s20,
  },
});

export const dark = StyleSheet.create({
  mainContainer: {
    backgroundColor: defaultTheme.colors.green.green_g9,
  },

  title: {
    fontFamily: defaultTheme.fonts.poppins.poppins_medium,
    fontSize: defaultTheme.fonts.font_size.font_size_f40,
    lineHeight: defaultTheme.fonts.font_size.font_size_f40 * 1.5,
    color: defaultTheme.colors.green.green_g1,
    marginTop: defaultTheme.size.size_s60,
    marginHorizontal: defaultTheme.size.size_s40,
    marginBottom: 4,
  },

  subtitle: {
    fontFamily: defaultTheme.fonts.roboto.roboto_regular,
    fontSize: defaultTheme.fonts.font_size.font_size_f16,
    lineHeight: defaultTheme.fonts.font_size.font_size_f16 * 1.2,
    color: defaultTheme.colors.green.green_g2,
    marginHorizontal: defaultTheme.size.size_s40,
    marginBottom: defaultTheme.size.size_s20,
  },
});
