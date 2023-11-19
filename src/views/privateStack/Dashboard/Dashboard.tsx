import React, {Component} from 'react';
import {Text, View} from 'react-native';

// Estilos
import {styles} from './Styles';

class Dashboard extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>Esta será a dashboard</Text>
      </View>
    );
  }
}

export default Dashboard;
