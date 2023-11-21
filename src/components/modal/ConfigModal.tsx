import React, {useEffect, useState} from 'react';
import {Modal, Text, Pressable, View} from 'react-native';

// Language
import i18n from '../../i18n';

// Styles;
import {white, dark} from './Styles';
import CloseIcon from '../svg/icons/closeIcon/CloseIcon';
import {defaultTheme} from '../../theme/defaultTheme';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Redux
import {useDispatch} from 'react-redux';
import {ThemeActions} from '../../store/reducers/theme/Actions';
import {LanguageActions} from '../../store/reducers/language/Actions';

interface iConfigModal {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConfigModal: React.FC<iConfigModal> = ({
  modalVisible,
  setModalVisible,
}) => {
  const [openLanguageMenu, setOpenLanguageMenu] = useState(false);
  const [theme, setTheme] = useState('white');
  const [language, setLanguage] = useState('pt-BR');

  const dispatch = useDispatch();

  const style = theme === 'dark' ? dark : white;

  useEffect(() => {
    const getThemeFromStorage = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem('theme');
        if (storedTheme !== null) {
          setTheme(storedTheme);
          dispatch(ThemeActions.setTheme({theme: storedTheme}));
        } else {
          setTheme('white');
        }
      } catch (error) {
        console.error('Erro ao obter o tema do AsyncStorage:', error);
      }
    };

    const getLanguageFromStorage = async () => {
      try {
        const storedLanguage = await AsyncStorage.getItem('language');

        if (storedLanguage !== null) {
          setLanguage(storedLanguage);

          i18n.defaultLocale = storedLanguage;
          i18n.locale = storedLanguage;

          dispatch(LanguageActions.setLanguage({language: storedLanguage}));
        } else {
          setLanguage('pt-BR');
          dispatch(LanguageActions.setLanguage({language: 'pt-BR'}));
          i18n.defaultLocale = 'pt-BR';
          i18n.locale = 'pt-BR';
        }
      } catch (error) {
        console.error('Erro ao obter a linguagem do AsyncStorage:', error);
      }
    };

    getThemeFromStorage();
    getLanguageFromStorage();
  }, [dispatch]);

  const changeTheme = async () => {
    const newTheme = theme === 'dark' ? 'white' : 'dark';

    setTheme(newTheme);

    await AsyncStorage.setItem('theme', newTheme);

    dispatch(ThemeActions.setTheme({theme: newTheme}));
  };

  const handlLanguageMenu = () => {
    setOpenLanguageMenu(!openLanguageMenu);
  };

  const handlSetLanguage = async (languageString: string) => {
    await AsyncStorage.setItem('language', languageString);

    const newLanguage = language === 'pt-BR' ? 'en-US' : 'pt-BR';

    dispatch(LanguageActions.setLanguage({language: newLanguage}));

    i18n.defaultLocale = newLanguage;
    i18n.locale = newLanguage;

    setLanguage(languageString);
    handlLanguageMenu();
  };

  return (
    <>
      <View style={style.centeredView}>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={style.centeredView}>
            <View style={style.modalView}>
              <View style={style.modalLine}>
                <Text style={style.modalText}>
                  {i18n.t('initialscreen.configurations')}
                </Text>
                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                  <CloseIcon />
                </Pressable>
              </View>

              <View style={{marginBottom: defaultTheme.size.size_s32}} />

              <View style={style.modalLine}>
                <Text style={style.optionText}>
                  {i18n.t('initialscreen.theme')}
                </Text>
                <Pressable style={style.option} onPress={() => changeTheme()}>
                  <Text style={style.themeText}>{theme}</Text>
                </Pressable>
              </View>

              <View style={{marginBottom: defaultTheme.size.size_s12}} />

              <View style={style.modalLine}>
                <Text style={style.optionText}>
                  {i18n.t('initialscreen.language')}
                </Text>
                <Pressable
                  style={style.option}
                  onPress={() => handlLanguageMenu()}>
                  <Text style={style.themeText}>{language}</Text>
                </Pressable>

                {openLanguageMenu && (
                  <View style={style.languageList}>
                    <Pressable
                      style={style.listOption}
                      onPress={() => handlSetLanguage('pt-BR')}>
                      <Text style={style.languageText}>pt-BR</Text>
                    </Pressable>
                    <Pressable
                      style={style.listOption}
                      onPress={() => handlSetLanguage('en-US')}>
                      <Text style={style.languageText}>en-US</Text>
                    </Pressable>
                  </View>
                )}
              </View>
            </View>
          </View>
        </Modal>
      </View>

      <View style={style.opacity} />
    </>
  );
};

export default ConfigModal;
