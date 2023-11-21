import React, {useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

// Libs
import {useNavigation} from '@react-navigation/native';

// Language
import i18n from '../../../i18n';

// Styles;
import {white, dark} from './Styles';
import {defaultTheme} from '../../../theme/defaultTheme';

// Components
import PrimaryButton from '../../../components/buttons/primaryButton/PrimaryButton';
import GetBackIcon from '../../../components/svg/icons/getBackIcon/GetBackIcon';
import CustomTextInput from '../../../components/inputs/textInput/TextInput';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordNotVisible, setIsPasswordNotVisible] = useState(true);

  const language = useSelector((state: any) => state.languageReducer.language);
  const theme = useSelector((state: any) => state.themeReducer.theme);
  const navigation = useNavigation();

  const style = theme === 'dark' ? dark : white;

  i18n.defaultLocale = language;
  i18n.locale = language;

  const onPressContinue = () => {};

  const path =
    theme === 'dark'
      ? require('../../../../public/img/backgroundDetail-blackTheme.png')
      : require('../../../../public/img/backgroundDetail-whiteTheme.png');

  return (
    <View style={style.mainContainer}>
      <Pressable style={style.getBack} onPress={() => navigation.goBack()}>
        <GetBackIcon />
      </Pressable>

      <View style={style.form}>
        <Text style={style.formText}>{i18n.t('signUpScreen.sign_in')}</Text>
      </View>

      <CustomTextInput placeholder="Email" value={email} setValue={setEmail} />

      <View style={{marginBottom: defaultTheme.size.size_s20}} />

      <CustomTextInput
        placeholder="Senha"
        value={password}
        setValue={setPassword}
        isPassword={isPasswordNotVisible}
      />

      <Pressable
        style={style.showPassword}
        onPress={() => setIsPasswordNotVisible(!isPasswordNotVisible)}>
        <Text style={style.showPasswordText}>
          {isPasswordNotVisible ? 'mostrar senha' : 'ocultar senha'}
        </Text>
      </Pressable>

      <View style={{marginBottom: defaultTheme.size.size_s40}} />

      <PrimaryButton
        text={i18n.t('signUpScreen.continue')}
        onPress={() => onPressContinue()}
      />

      <Image source={path} style={style.backgroundDetail} />
    </View>
  );
};

export default SignIn;
