import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  Screen1: Screen1,
  Screen2: Screen2,
});
const AppContainer = createAppContainer(AppNavigator);
 