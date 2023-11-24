import {StyleSheet, Platform} from 'react-native';
import {defaultTheme} from '../../../theme/defaultTheme';

export const white = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: defaultTheme.colors.black.black_b1,
  },

  listSection: {
    backgroundColor: defaultTheme.colors.white.white_w2,
    height: '100%',
    borderTopLeftRadius: defaultTheme.round.round_r6,
    borderTopRightRadius: defaultTheme.round.round_r6,
    padding: defaultTheme.size.size_s40,
  },

  listSectionTitle: {
    fontFamily: defaultTheme.fonts.poppins.poppins_medium,
    fontSize: defaultTheme.fonts.font_size.font_size_f24,
    lineHeight: defaultTheme.fonts.font_size.font_size_f24 * 1.1,
    color: defaultTheme.colors.green.green_g10,
  },

  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    gap: defaultTheme.size.size_s12,
    marginBottom: defaultTheme.size.size_s40,
    alignItems: 'center',
  },

  titleDetail: {
    width: 4,
    height: '120%',
    backgroundColor: defaultTheme.colors.green.green_g6,
  },

  taskListCard: {
    fontFamily: defaultTheme.fonts.roboto.roboto_regular,
    fontSize: defaultTheme.fonts.font_size.font_size_f14,
    lineHeight: defaultTheme.fonts.font_size.font_size_f14 * 1.5,
    color: defaultTheme.colors.gray.gray_g7,
    backgroundColor: defaultTheme.colors.white.white_w1,
    paddingHorizontal: defaultTheme.size.size_24,
    paddingVertical: defaultTheme.size.size_s12,
    borderRadius: defaultTheme.round.round_r6,

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

  configIcon: {
    position: 'absolute',
    top: '5%',
    right: '10%',
  },
});

export const dark = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: defaultTheme.colors.green.green_g9,
  },

  listSection: {
    backgroundColor: defaultTheme.colors.black.black_b1,
    height: '100%',
    borderTopLeftRadius: defaultTheme.round.round_r6,
    borderTopRightRadius: defaultTheme.round.round_r6,
    padding: defaultTheme.size.size_s40,
  },

  listSectionTitle: {
    fontFamily: defaultTheme.fonts.poppins.poppins_medium,
    fontSize: defaultTheme.fonts.font_size.font_size_f24,
    lineHeight: defaultTheme.fonts.font_size.font_size_f24 * 1.1,
    color: defaultTheme.colors.gray.gray_g2,
  },

  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    gap: defaultTheme.size.size_s12,
    marginBottom: defaultTheme.size.size_s40,
    alignItems: 'center',
  },

  titleDetail: {
    width: 4,
    height: '120%',
    backgroundColor: defaultTheme.colors.green.green_g6,
  },

  taskListCard: {
    fontFamily: defaultTheme.fonts.roboto.roboto_regular,
    fontSize: defaultTheme.fonts.font_size.font_size_f14,
    lineHeight: defaultTheme.fonts.font_size.font_size_f14 * 1.5,
    color: defaultTheme.colors.gray.gray_g7,
    backgroundColor: defaultTheme.colors.white.white_w1,
    paddingHorizontal: defaultTheme.size.size_24,
    paddingVertical: defaultTheme.size.size_s12,
    borderRadius: defaultTheme.round.round_r6,

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
});
