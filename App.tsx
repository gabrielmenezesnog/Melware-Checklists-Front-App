import 'react-native-gesture-handler';
import React from 'react';
import {Platform, StatusBar} from 'react-native';
import {Routes} from './src/navigation';

// Redux
import {Provider} from 'react-redux';
import {store} from './src/store/Store';

export const App = () => {
  return (
    <>
      {Platform.OS === 'android' && (
        <StatusBar translucent={true} backgroundColor="rgba(0, 0, 0, 0.0)" />
      )}
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
};

export default App;
