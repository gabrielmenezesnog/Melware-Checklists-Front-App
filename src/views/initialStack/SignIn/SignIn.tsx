import React, {useEffect, useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';

// Libs
import {useNavigation} from '@react-navigation/native';

// Language
import i18n from '../../../i18n';

// Styles;
import {white, dark} from './Styles';
import {defaultTheme} from '../../../theme/defaultTheme';

// Redux
import {useDispatch, useSelector} from 'react-redux';
import {AuthActions} from '../../../store/reducers/auth/Actions';

// Components
import PrimaryButton from '../../../components/buttons/primaryButton/PrimaryButton';
import GetBackIcon from '../../../components/svg/icons/getBackIcon/GetBackIcon';
import CustomTextInput from '../../../components/inputs/textInput/CustomTextInput';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordNotVisible, setIsPasswordNotVisible] = useState(true);
  const [hasEmailWarn, setHasEmailWarn] = useState(false);
  const [hasPasswordWarn, setHasPasswordWarn] = useState(false);
  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const language = useSelector((state: any) => state.languageReducer.language);
  const theme = useSelector((state: any) => state.themeReducer.theme);
  const auth = useSelector((state: any) => state.authReducer);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const style = theme === 'dark' ? dark : white;

  i18n.defaultLocale = language;
  i18n.locale = language;

  const path =
    theme === 'dark'
      ? require('../../../../public/img/backgroundDetail-blackTheme.png')
      : require('../../../../public/img/backgroundDetail-whiteTheme.png');

  const errorMessage = auth.message;

  useEffect(() => {
    switch (errorMessage) {
      case 'email_not_found': {
        setHasEmailWarn(true);
        setIsLoading(false);
        break;
      }

      case 'wrong_password': {
        setHasPasswordWarn(true);
        setIsLoading(false);
        break;
      }

      default: {
        setHasEmailWarn(false);
        setHasPasswordWarn(false);
      }
    }
  }, [errorMessage]);

  useEffect(() => {
    if (email.length > 0 && password.length > 0) {
      setIsLoginButtonDisabled(false);
    } else {
      setIsLoginButtonDisabled(true);
    }
  }, [email, password]);

  const onPressContinue = () => {
    dispatch(AuthActions.signIn({user: {email, password}}));
    setIsLoading(true);
  };

  return (
    <View style={style.mainContainer}>
      <Pressable style={style.getBack} onPress={() => navigation.goBack()}>
        <GetBackIcon />
      </Pressable>

      <View style={style.form}>
        <Text style={style.formText}>{i18n.t('signInScreen.sign_in')}</Text>
      </View>

      <CustomTextInput
        placeholder={i18n.t('signInScreen.email')}
        value={email}
        setValue={setEmail}
        error={hasEmailWarn}
      />

      <View style={{marginBottom: defaultTheme.size.size_s20}} />

      <CustomTextInput
        placeholder={i18n.t('signInScreen.password')}
        value={password}
        setValue={setPassword}
        isPassword={isPasswordNotVisible}
        error={hasPasswordWarn}
      />

      <Pressable
        style={style.showPassword}
        onPress={() => setIsPasswordNotVisible(!isPasswordNotVisible)}>
        <Text style={style.showPasswordText}>
          {isPasswordNotVisible
            ? i18n.t('signInScreen.show_password')
            : i18n.t('signInScreen.hide_password')}
        </Text>
      </Pressable>

      <View style={{marginBottom: defaultTheme.size.size_s40}} />

      <PrimaryButton
        text={i18n.t('signInScreen.continue')}
        onPress={() => onPressContinue()}
        isDisabled={isLoginButtonDisabled}
        loading={isLoading}
      />

      <Text style={style.errorMessage}>
        {errorMessage ? i18n.t(`signInScreen.${errorMessage}`) : null}
      </Text>

      <Image source={path} style={style.backgroundDetail} />
    </View>
  );
};

export default SignIn;
