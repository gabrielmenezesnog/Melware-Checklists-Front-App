import {StyleSheet} from 'react-native';
import {defaultTheme} from '../../../theme/defaultTheme';

export const whiteTheme = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: defaultTheme.colors.white.white_w1,
    padding: defaultTheme.size.size_s5,
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
    zIndex: -1,
    right: '-90%',
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
