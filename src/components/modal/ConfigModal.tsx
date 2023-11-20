import React, {useEffect, useState} from 'react';
import {Modal, Text, Pressable, View} from 'react-native';

// Styles;
import {white, dark} from './Styles';
import CloseIcon from '../svg/icons/closeIcon/CloseIcon';
import {defaultTheme} from '../../theme/defaultTheme';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Redux
import {useDispatch} from 'react-redux';
import {ThemeActions} from '../../store/reducers/theme/Actions';

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
        const storedLanguage = await AsyncStorage.getItem('language');
        if (storedTheme !== null) {
          setTheme(storedTheme);
          dispatch(ThemeActions.setTheme({theme: storedTheme}));
        } else {
          setTheme('white');
        }

        if (storedLanguage !== null) {
          setLanguage(storedLanguage);
        } else {
          setLanguage('pt-BR');
        }
      } catch (error) {
        console.error('Erro ao obter o tema do AsyncStorage:', error);
      }
    };

    getThemeFromStorage();
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
    setLanguage(languageString);
    handlLanguageMenu();
    await AsyncStorage.setItem('language', languageString);
  };

  return (
    <>
      <View style={style.centeredView}>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={style.centeredView}>
            <View style={style.modalView}>
              <View style={style.modalLine}>
                <Text style={style.modalText}>Configurações</Text>
                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                  <CloseIcon />
                </Pressable>
              </View>

              <View style={{marginBottom: defaultTheme.size.size_s32}} />

              <View style={style.modalLine}>
                <Text style={style.optionText}>Tema</Text>
                <Pressable style={style.option} onPress={() => changeTheme()}>
                  <Text style={style.themeText}>{theme}</Text>
                </Pressable>
              </View>

              <View style={{marginBottom: defaultTheme.size.size_s12}} />

              <View style={style.modalLine}>
                <Text style={style.optionText}>Idioma</Text>
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
