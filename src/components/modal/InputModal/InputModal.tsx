import React from 'react';
import {Modal, Text, Pressable, View} from 'react-native';

// Styles;
import {white, dark} from './Styles';
import CloseIcon from '../../svg/icons/closeIcon/CloseIcon';

// Redux
import CustomTextInput from '../../inputs/textInput/CustomTextInput';
import {useSelector} from 'react-redux';
import PrimaryButton from '../../buttons/primaryButton/PrimaryButton';
import {defaultTheme} from '../../../theme/defaultTheme';

interface iConfigModal {
  title: string;
  placeholder?: string;
  isEditMode: boolean;
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  onPressSave: () => void;
  value: string | undefined;
  setValue: (text: string) => void;
  loading?: boolean;
}

const InputModal: React.FC<iConfigModal> = ({
  title,
  placeholder,
  isEditMode,
  setIsEditMode,
  onPressSave,
  value,
  setValue,
  loading,
}) => {
  const theme = useSelector((state: any) => state.themeReducer.theme);

  const style = theme === 'dark' ? dark : white;

  return (
    <>
      <View style={style.centeredView}>
        <Modal animationType="slide" transparent={true} visible={isEditMode}>
          <View style={style.centeredView}>
            <View style={style.modalView}>
              <View style={style.modalLine}>
                <Text style={style.modalText}>{title}</Text>
                <Pressable onPress={() => setIsEditMode(!isEditMode)}>
                  <CloseIcon />
                </Pressable>
              </View>

              <CustomTextInput
                placeholder={placeholder ?? ''}
                value={value}
                setValue={setValue}
              />

              <View style={{marginBottom: defaultTheme.size.size_s20}} />

              <PrimaryButton
                text="salvar"
                onPress={onPressSave}
                isDisabled={value !== '' ? false : true}
                loading={loading}
              />
            </View>
          </View>
        </Modal>
      </View>

      <View style={style.opacity} />
    </>
  );
};

export default InputModal;
