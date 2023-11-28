import React from 'react';
import {Modal, Text, Pressable, View} from 'react-native';
import CloseIcon from '../../svg/icons/closeIcon/CloseIcon';

// Language
import i18n from '../../../i18n';

// Styles;
import {white, dark} from './Styles';

// Redux
import {useSelector} from 'react-redux';
import PrimaryButton from '../../buttons/primaryButton/PrimaryButton';

// Components
import SecondaryButton from '../../buttons/secondaryButton/SecondaryButton';

interface iConfigModal {
  title: string;
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  onPressConfirm: () => void;
  onPressCancel: () => void;
  loading?: boolean;
}

const ConfirmModal: React.FC<iConfigModal> = ({
  title,
  isActive,
  setIsActive,
  onPressConfirm,
  onPressCancel,
  loading,
}) => {
  const theme = useSelector((state: any) => state.themeReducer.theme);

  const style = theme === 'dark' ? dark : white;

  return (
    <>
      <View style={style.centeredView}>
        <Modal animationType="slide" transparent={true} visible={isActive}>
          <View style={style.centeredView}>
            <View style={style.modalView}>
              <View style={style.modalLine}>
                <Text style={style.modalText}>{title}</Text>
                <Pressable onPress={() => setIsActive(!isActive)}>
                  <CloseIcon />
                </Pressable>
              </View>

              <View style={style.modalLine}>
                <View style={style.buttonContainer}>
                  <PrimaryButton
                    error={true}
                    text={i18n.t('taskList.yes')}
                    onPress={onPressConfirm}
                    loading={loading}
                  />
                </View>

                <View style={style.buttonContainer}>
                  <SecondaryButton
                    text={i18n.t('taskList.no')}
                    onPress={onPressCancel}
                  />
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>

      <View style={style.opacity} />
    </>
  );
};

export default ConfirmModal;
