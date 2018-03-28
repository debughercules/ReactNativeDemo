/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import LoginViewModel from "./ViewModels/LoginViewModel"
import LoginInfo from "./Models/LoginInfo"
import RefreshDelegate from "./ViewModels/LoginViewModel"
import styles from './LoginStyle'
import DetailsScreen from './DetailScreen'

import {
  Platform,
  Text,
  View,
  ScrollView,
  ListView,
  Button
} from 'react-native';

import { StackNavigator } from 'react-navigation';

class HomeScreen extends Component implements RefreshDelegate  {
  viewModel = new LoginViewModel();

  constructor() {
    super();
    this.viewModel.delegate = this
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2','row3']),
    };
  }

  refreshScreen() {
    this.setState({})
  }

  onPressMethod() {
    this.viewModel.callWebserviceToLoadData()
  }

  static navigationOptions = {
    title: 'Home',
  };

  render() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            { this.viewModel.getTitleMessage()}
          </Text>
          <Text style={styles.instructions}>
          <Text style={styles.welcome}>
          { this.viewModel.getSubTitleMessage()}
            </Text>
          </Text>
          <Text style={styles.instructions}>
            {LoginViewModel.instructions}
          </Text>
          <Button onPress={() => this.onPressMethod()} title="Change Content"> 
          </Button>
          <Button
          title="Go to Details"
          //onPress={() => this.props.navigation.navigate('Details')}
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
        </View>
      );
    }
  }

  const RootStack = StackNavigator({
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}


  


