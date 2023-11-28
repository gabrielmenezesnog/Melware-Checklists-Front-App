import {Dimensions, StyleSheet} from 'react-native';
import {defaultTheme} from '../../../theme/defaultTheme';

const {height: height, width: width} = Dimensions.get('window');

export const white = StyleSheet.create({
  centeredView: {
    position: 'absolute',
    left: '5%',
    top: '38%',
    width: '90%',
  },

  modalView: {
    margin: defaultTheme.size.size_s20,
    backgroundColor: defaultTheme.colors.white.white_w1,
    borderRadius: defaultTheme.size.size_s20,
    padding: defaultTheme.size.size_s20,
    shadowColor: defaultTheme.colors.black.black_b1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  opacity: {
    backgroundColor: defaultTheme.colors.black.black_op_50,
    zIndex: 2,
    width: width,
    height: height,
    position: 'absolute',
  },

  modalText: {
    fontFamily: defaultTheme.fonts.poppins.poppins_medium,
    color: defaultTheme.colors.gray.gray_g8,
    fontSize: defaultTheme.fonts.font_size.font_size_f16,
  },

  optionText: {
    fontFamily: defaultTheme.fonts.roboto.roboto_regular,
    color: defaultTheme.colors.gray.gray_g6,
    fontSize: defaultTheme.fonts.font_size.font_size_f14,
  },

  modalLine: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    marginBottom: defaultTheme.size.size_s20,
  },

  option: {
    paddingHorizontal: defaultTheme.size.size_24,
    paddingVertical: defaultTheme.size.size_s12,
    backgroundColor: defaultTheme.colors.gray.gray_g2,
    borderRadius: defaultTheme.round.round_r1,
    width: 100,
  },

  themeText: {
    fontFamily: defaultTheme.fonts.roboto.roboto_medium,
    color: defaultTheme.colors.gray.gray_g7,
    textAlign: 'center',
    fontSize: defaultTheme.fonts.font_size.font_size_f14,
  },

  languageList: {
    position: 'absolute',
    backgroundColor: defaultTheme.colors.white.white_w1,
    borderColor: defaultTheme.colors.gray.gray_g2,
    borderWidth: 1,
    width: 100,
    alignItems: 'center',
    right: 0,
    bottom: '-160%',
    borderRadius: defaultTheme.round.round_r1,
  },

  listOption: {
    borderBottomWidth: 1,
    borderColor: defaultTheme.colors.gray.gray_g2,
    width: '100%',
    padding: defaultTheme.size.size_s6,
    borderRadius: defaultTheme.round.round_r1,
  },

  languageText: {
    fontFamily: defaultTheme.fonts.roboto.roboto_regular,
    color: defaultTheme.colors.gray.gray_g6,
    textAlign: 'center',
  },
});

export const dark = StyleSheet.create({
  centeredView: {
    position: 'absolute',
    left: '5%',
    top: '38%',
    width: '90%',
  },

  modalView: {
    margin: defaultTheme.size.size_s20,
    backgroundColor: defaultTheme.colors.black.black_b2,
    borderRadius: defaultTheme.size.size_s20,
    padding: defaultTheme.size.size_s20,
    shadowColor: defaultTheme.colors.black.black_b1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  opacity: {
    backgroundColor: defaultTheme.colors.black.black_op_50,
    zIndex: 2,
    width: width,
    height: height,
    position: 'absolute',
  },

  modalText: {
    fontFamily: defaultTheme.fonts.poppins.poppins_medium,
    color: defaultTheme.colors.gray.gray_g2,
    fontSize: defaultTheme.fonts.font_size.font_size_f16,
    marginBottom: defaultTheme.size.size_s12,
  },

  optionText: {
    fontFamily: defaultTheme.fonts.roboto.roboto_regular,
    color: defaultTheme.colors.gray.gray_g4,
    fontSize: defaultTheme.fonts.font_size.font_size_f14,
  },

  modalLine: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    marginBottom: defaultTheme.size.size_s20,
  },

  option: {
    paddingHorizontal: defaultTheme.size.size_24,
    paddingVertical: defaultTheme.size.size_s12,
    backgroundColor: defaultTheme.colors.gray.gray_g7,
    borderRadius: defaultTheme.round.round_r1,
    width: 100,
  },

  themeText: {
    fontFamily: defaultTheme.fonts.roboto.roboto_medium,
    color: defaultTheme.colors.gray.gray_g2,
    textAlign: 'center',
    fontSize: defaultTheme.fonts.font_size.font_size_f14,
  },

  languageList: {
    position: 'absolute',
    backgroundColor: defaultTheme.colors.black.black_b2,
    borderColor: defaultTheme.colors.gray.gray_g6,
    borderWidth: 1,
    width: 100,
    alignItems: 'center',
    right: 0,
    bottom: '-160%',
    borderRadius: defaultTheme.round.round_r1,
  },

  listOption: {
    borderBottomWidth: 1,
    borderColor: defaultTheme.colors.gray.gray_g6,
    width: '100%',
    padding: defaultTheme.size.size_s6,
    borderRadius: defaultTheme.round.round_r1,
  },

  languageText: {
    fontFamily: defaultTheme.fonts.roboto.roboto_regular,
    color: defaultTheme.colors.gray.gray_g2,
    textAlign: 'center',
  },
});
