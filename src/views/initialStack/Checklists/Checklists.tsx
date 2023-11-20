import React from 'react';
import {Image, View} from 'react-native';

// Libs
import {Dispatch, AnyAction} from '@reduxjs/toolkit';

// Styles;
import {whiteTheme} from './Styles';
import {defaultTheme} from '../../../theme/defaultTheme';

// Redux
import {connect} from 'react-redux';
import bindActionCreators from 'react-redux/es/utils/bindActionCreators';

// Components
import ChecklistsLogo from '../../../components/logo/checklists/ChecklistsLogo';
import MelwareLogo from '../../../components/logo/melware/MelwareLogo';
import PrimaryButton from '../../../components/buttons/primaryButton/PrimaryButton';
import SecondaryButton from '../../../components/buttons/secondaryButton/SecondaryButton';

export const Checklists = () => {
  const onPressSignIn = () => {};
  const onPressSignUp = () => {};

  return (
    <View style={whiteTheme.mainContainer}>
      <View style={whiteTheme.checklistsLogoContainer}>
        <ChecklistsLogo />
      </View>

      <SecondaryButton text={'entrar'} onPress={() => onPressSignIn()} />

      <View style={{marginBottom: defaultTheme.size.size_s1}} />

      <PrimaryButton text={'criar conta'} onPress={() => onPressSignUp()} />

      <View style={whiteTheme.melwareLogoContainer}>
        <MelwareLogo />
      </View>

      <Image
        source={require('../../../../public/img/backgroundDetail-whiteTheme.png')}
        style={whiteTheme.backgroundDetail}
      />
    </View>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators({}, dispatch);

export default connect(null, mapDispatchToProps)(Checklists);
