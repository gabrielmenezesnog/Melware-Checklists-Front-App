import React, {useState} from 'react';
import {Image, Pressable, View} from 'react-native';
import {useSelector} from 'react-redux';

// Libs
import {useNavigation} from '@react-navigation/native';

// Language
import i18n from '../../../i18n';

// Styles;
import {white, dark} from './Styles';
import {defaultTheme} from '../../../theme/defaultTheme';

// Components
import ChecklistsLogo from '../../../components/svg/logo/checklists/ChecklistsLogo';
import MelwareLogo from '../../../components/svg/logo/melware/MelwareLogo';
import PrimaryButton from '../../../components/buttons/primaryButton/PrimaryButton';
import SecondaryButton from '../../../components/buttons/secondaryButton/SecondaryButton';
import ConfigIcon from '../../../components/svg/icons/wireIcon/WireIcon';
import ConfigModal from '../../../components/modal/ConfigModal';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  SignIn: undefined;
};

type SignInScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SignIn'
>;

export const Checklists = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const language = useSelector((state: any) => state.languageReducer.language);
  i18n.defaultLocale = language;
  i18n.locale = language;

  const theme = useSelector((state: any) => state.themeReducer.theme);
  const style = theme === 'dark' ? dark : white;

  const navigation = useNavigation<SignInScreenNavigationProp>();

  const onPressSignIn = () => {
    navigation.navigate('SignIn');
  };
  const onPressSignUp = () => {};
  const onPressConfig = () => {
    setModalVisible(!modalVisible);
  };

  const path =
    theme === 'dark'
      ? require('../../../../public/img/backgroundDetail-blackTheme.png')
      : require('../../../../public/img/backgroundDetail-whiteTheme.png');

  return (
    <View style={style.mainContainer}>
      {modalVisible && (
        <>
          <ConfigModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        </>
      )}

      <Pressable style={style.configIcon} onPress={() => onPressConfig()}>
        <ConfigIcon />
      </Pressable>

      <View style={style.checklistsLogoContainer}>
        <ChecklistsLogo />
      </View>

      <SecondaryButton
        text={i18n.t('initialscreen.sign_in')}
        onPress={() => onPressSignIn()}
      />

      <View style={{marginBottom: defaultTheme.size.size_s12}} />

      <PrimaryButton
        text={i18n.t('initialscreen.sign_up')}
        onPress={() => onPressSignUp()}
      />

      <View style={style.melwareLogoContainer}>
        <MelwareLogo />
      </View>

      <Image source={path} style={style.backgroundDetail} />
    </View>
  );
};

export default Checklists;
