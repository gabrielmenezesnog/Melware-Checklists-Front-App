import {StyleSheet, Platform} from 'react-native';
import {defaultTheme} from '../../../theme/defaultTheme';

export const white = StyleSheet.create({
  taskListCard: {
    fontFamily: defaultTheme.fonts.roboto.roboto_regular,
    fontSize: defaultTheme.fonts.font_size.font_size_f14,
    lineHeight: defaultTheme.fonts.font_size.font_size_f14 * 1.5,
    color: defaultTheme.colors.gray.gray_g7,
    backgroundColor: defaultTheme.colors.white.white_w1,
    paddingHorizontal: defaultTheme.size.size_24,
    paddingVertical: defaultTheme.size.size_s12,
    borderRadius: defaultTheme.round.round_r1,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: defaultTheme.size.size_s12,

    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 1,
        shadowRadius: 2,
      },
      android: {
        elevation: 1.5,
      },
    }),
  },

  taskListTitle: {
    fontFamily: defaultTheme.fonts.roboto.roboto_medium,
    fontSize: defaultTheme.fonts.font_size.font_size_f14,
    lineHeight: defaultTheme.fonts.font_size.font_size_f14 * 1.2,
    color: defaultTheme.colors.gray.gray_g7,
    maxWidth: '60%',
  },

  taskListDate: {
    fontFamily: defaultTheme.fonts.roboto.roboto_medium,
    fontSize: defaultTheme.fonts.font_size.font_size_f12,
    lineHeight: defaultTheme.fonts.font_size.font_size_f12 * 1.2,
    color: defaultTheme.colors.gray.gray_g5,
  },
});

export const dark = StyleSheet.create({
  taskListCard: {
    fontFamily: defaultTheme.fonts.roboto.roboto_regular,
    fontSize: defaultTheme.fonts.font_size.font_size_f14,
    lineHeight: defaultTheme.fonts.font_size.font_size_f14 * 1.5,
    color: defaultTheme.colors.gray.gray_g7,
    backgroundColor: defaultTheme.colors.black.black_b2,
    paddingHorizontal: defaultTheme.size.size_24,
    paddingVertical: defaultTheme.size.size_s12,
    borderRadius: defaultTheme.round.round_r1,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: defaultTheme.size.size_s12,

    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 1,
        shadowRadius: 2,
      },
      android: {
        elevation: 1.5,
      },
    }),
  },

  taskListTitle: {
    fontFamily: defaultTheme.fonts.roboto.roboto_medium,
    fontSize: defaultTheme.fonts.font_size.font_size_f14,
    lineHeight: defaultTheme.fonts.font_size.font_size_f14 * 1.2,
    color: defaultTheme.colors.gray.gray_g5,
    maxWidth: '60%',
  },

  taskListDate: {
    fontFamily: defaultTheme.fonts.roboto.roboto_medium,
    fontSize: defaultTheme.fonts.font_size.font_size_f12,
    lineHeight: defaultTheme.fonts.font_size.font_size_f12 * 1.2,
    color: defaultTheme.colors.gray.gray_g7,
  },
});
