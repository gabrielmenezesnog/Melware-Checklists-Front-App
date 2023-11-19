import React from 'react';
import {Text} from 'react-native';

// Styles;
import {styles} from './Styles';

// Redux
import {connect} from 'react-redux';
import {Dispatch, AnyAction} from '@reduxjs/toolkit';
import bindActionCreators from 'react-redux/es/utils/bindActionCreators';
// import {UserActions} from '../../../store/reducers/Auth/Actions';

// interface State {
//   formulario: {
//     usuarioId?: number;
//     idpropriedade?: number;
//     usuarioCpf: string;
//     usuarioNome: string;
//     usuarioEmail: string;
//     usuarioFone: number;
//     usuarioAtivo: string;
//     usuarioSenha: string;
//   };
// }

// interface LoginForm {
//   signUpUser: (formData: object) => void;
// }

export const Login = () => {
  return <Text>Login</Text>;
};

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
