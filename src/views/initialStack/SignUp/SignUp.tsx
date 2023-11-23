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

export const SignUp = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const [isPasswordNotVisible, setIsPasswordNotVisible] = useState(true);

  const [hasEmailWarn, setHasEmailWarn] = useState(false);
  const [hasPasswordWarn, setHasPasswordWarn] = useState(false);
  const [hasRepeatPasswordWarn, setHasRepeatPasswordWarn] = useState(false);

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

      case 'password_dont_match': {
        setIsLoading(false);
        setIsLoginButtonDisabled(true);
        setHasRepeatPasswordWarn(true);
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
        setHasRepeatPasswordWarn(false);
      }
    }
  }, [errorMessage]);

  useEffect(() => {
    const isFormIncomplete =
      name.length === 0 ||
      lastName.length === 0 ||
      email.length === 0 ||
      password.length === 0 ||
      repeatPassword.length === 0;

    if (isFormIncomplete) {
      setIsLoginButtonDisabled(true);
    } else {
      setIsLoginButtonDisabled(false);
    }
  }, [name, lastName, email, password, repeatPassword]);

  const onPressContinue = () => {
    if (password !== repeatPassword) {
      dispatch(AuthActions.setErrorMessage({message: 'password_dont_match'}));
    }

    if (!errorMessage) {
      const userObj = {
        email: email,
        password: password,
        person: {
          name: name,
          lastName: lastName,
          contact: {
            phoneNumber: '',
          },
        },
      };

      dispatch(AuthActions.signUp({user: userObj}));
    }
  };

  return (
    <View style={style.mainContainer}>
      <Pressable style={style.getBack} onPress={() => navigation.goBack()}>
        <GetBackIcon />
      </Pressable>

      <View style={style.form}>
        <Text style={style.formText}>{i18n.t('signUpScreen.sign_up')}</Text>
      </View>

      <CustomTextInput
        placeholder={i18n.t('signUpScreen.name')}
        value={name}
        setValue={setName}
      />

      <View style={{marginBottom: defaultTheme.size.size_s20}} />

      <CustomTextInput
        placeholder={i18n.t('signUpScreen.last_name')}
        value={lastName}
        setValue={setLastName}
      />

      <View style={{marginBottom: defaultTheme.size.size_s20}} />

      <CustomTextInput
        placeholder={i18n.t('signUpScreen.email')}
        value={email}
        setValue={setEmail}
        error={hasEmailWarn}
      />

      <View style={{marginBottom: defaultTheme.size.size_s20}} />

      <CustomTextInput
        placeholder={i18n.t('signUpScreen.password')}
        value={password}
        setValue={setPassword}
        isPassword={isPasswordNotVisible}
        error={hasPasswordWarn}
      />

      <View style={{marginBottom: defaultTheme.size.size_s20}} />

      <CustomTextInput
        placeholder={i18n.t('signUpScreen.repeat_password')}
        value={repeatPassword}
        setValue={setRepeatPassword}
        isPassword={isPasswordNotVisible}
        error={hasRepeatPasswordWarn}
      />

      <Pressable
        style={style.showPassword}
        onPress={() => setIsPasswordNotVisible(!isPasswordNotVisible)}>
        <Text style={style.showPasswordText}>
          {isPasswordNotVisible
            ? i18n.t('signUpScreen.show_passwords')
            : i18n.t('signUpScreen.hide_passwords')}
        </Text>
      </Pressable>

      <View style={{marginBottom: defaultTheme.size.size_s40}} />

      <PrimaryButton
        text={i18n.t('signUpScreen.continue')}
        onPress={() => onPressContinue()}
        isDisabled={isLoginButtonDisabled}
        loading={isLoading}
      />

      <Text style={style.errorMessage}>
        {errorMessage ? i18n.t(`signUpScreen.${errorMessage}`) : null}
      </Text>

      <Image source={path} style={style.backgroundDetail} />
    </View>
  );
};

export default SignUp;
