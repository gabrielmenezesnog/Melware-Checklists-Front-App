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

  checklistsLogoContainer: {
    marginBottom: defaultTheme.size.size_s8,
  },

  melwareLogoContainer: {
    position: 'absolute',
    bottom: 60,
  },

  backgroundDetail: {
    position: 'absolute',
    zIndex: -2,
    right: '-90%',
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: defaultTheme.colors.black.black_b1,
    padding: defaultTheme.size.size_s40,
    position: 'relative',
  },

  checklistsLogoContainer: {
    marginBottom: defaultTheme.size.size_s8,
  },

  melwareLogoContainer: {
    position: 'absolute',
    bottom: 60,
  },

  backgroundDetail: {
    position: 'absolute',
    zIndex: -2,
    right: '-90%',
  },

  configIcon: {
    position: 'absolute',
    top: '5%',
    right: '10%',
  },
});
