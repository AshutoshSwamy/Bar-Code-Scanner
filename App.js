import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {SearchScreen} from './screens/SearchScreen';
import {TranscationScreen} from './screens/TransactionScreen';
import {createAppcontainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
  );
  }
}

const TabNavigator = createBottomTabNavigator({

  Transaction : {Screen : TranscationScreen},
  Search : {Screen : SearchScreen},
})

const AppContainer = createAppcontainer(TabNavigator);




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

