import {StyleSheet} from 'react-native';
import {defaultTheme} from '../../../theme/defaultTheme';

export const white = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: defaultTheme.colors.white.white_w1,
    padding: defaultTheme.size.size_s40,
    position: 'relative',
  },

  melwareLogoContainer: {
    position: 'absolute',
    bottom: 60,
  },

  backgroundDetail: {
    position: 'absolute',
    zIndex: -2,
    right: '80%',
    height: '100%',
    borderRadius: 500,
    transform: [{scaleX: -1}],
  },

  configIcon: {
    position: 'absolute',
    top: '5%',
    right: '10%',
  },

  form: {
    width: '100%',
  },

  formText: {
    fontFamily: defaultTheme.fonts.poppins.poppins_medium,
    fontSize: defaultTheme.fonts.font_size.font_size_f32,
    color: defaultTheme.colors.green.green_g10,
    marginBottom: defaultTheme.size.size_s40,
  },

  input: {
    width: '100%',
    borderBottomWidth: 1.5,
    borderColor: defaultTheme.colors.gray.gray_g4,
    color: defaultTheme.colors.gray.gray_g8,
    fontFamily: defaultTheme.fonts.roboto.roboto_regular,
    fontSize: defaultTheme.fonts.font_size.font_size_f16,
    paddingBottom: defaultTheme.size.size_s6,
  },

  getBack: {
    width: '100%',
    marginBottom: defaultTheme.size.size_s40,
  },

  showPassword: {
    width: '100%',
    marginTop: defaultTheme.size.size_s12,
    alignItems: 'flex-end',
  },

  showPasswordText: {
    fontFamily: defaultTheme.fonts.roboto.roboto_medium,
    fontSize: defaultTheme.fonts.font_size.font_size_f14,
    color: defaultTheme.colors.green.green_g6,
  },

  errorMessage: {
    fontFamily: defaultTheme.fonts.roboto.roboto_medium,
    fontSize: defaultTheme.fonts.font_size.font_size_f14,
    color: defaultTheme.colors.red.red_error,
    marginTop: defaultTheme.size.size_s12,
  },
});

export const dark = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: defaultTheme.colors.black.black_b1,
    padding: defaultTheme.size.size_s40,
    position: 'relative',
  },

  melwareLogoContainer: {
    position: 'absolute',
    bottom: 60,
  },

  backgroundDetail: {
    position: 'absolute',
    zIndex: -2,
    right: '80%',
    height: '100%',
    borderRadius: 500,
    transform: [{scaleX: -1}],
  },

  configIcon: {
    position: 'absolute',
    top: '5%',
    right: '10%',
  },

  form: {
    marginBottom: defaultTheme.size.size_s20,
    width: '100%',
  },

  formText: {
    fontFamily: 'Poppins-Medium',
    fontSize: defaultTheme.fonts.font_size.font_size_f32,
    color: defaultTheme.colors.gray.gray_g1,
  },

  input: {
    width: '100%',
    borderBottomWidth: 1.5,
    marginBottom: defaultTheme.size.size_s32,
    borderColor: defaultTheme.colors.gray.gray_g3,
    color: defaultTheme.colors.gray.gray_g2,
    fontFamily: defaultTheme.fonts.roboto.roboto_regular,
    fontSize: defaultTheme.fonts.font_size.font_size_f16,
    paddingBottom: defaultTheme.size.size_s6,
  },

  getBack: {
    width: '100%',
    marginBottom: defaultTheme.size.size_s40,
  },

  showPassword: {
    width: '100%',
    marginTop: defaultTheme.size.size_s12,
    alignItems: 'flex-end',
  },

  showPasswordText: {
    fontFamily: defaultTheme.fonts.roboto.roboto_medium,
    fontSize: defaultTheme.fonts.font_size.font_size_f14,
    color: defaultTheme.colors.green.green_g6,
  },

  errorMessage: {
    fontFamily: defaultTheme.fonts.roboto.roboto_medium,
    fontSize: defaultTheme.fonts.font_size.font_size_f14,
    color: defaultTheme.colors.red.red_error,
    marginTop: defaultTheme.size.size_s12,
  },
});
