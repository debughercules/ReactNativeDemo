import React, { Component } from 'react';

import {
    Platform,
    Text,
    View,
    ScrollView,
    ListView,
    Button
  } from 'react-native';

export default class DetailsScreen extends Component {

    // static navigationOptions = {
    //     title: 'Details',
    //   };

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        
        return {
          title: params ? params.otherParam : 'A Nested Details Screen',
        }
      };

    render() {
        /* 2. Read the params from the navigation state */
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null;

      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>My 2 Details Screen</Text>
          <Text>itemId: {JSON.stringify(itemId)}</Text>  
          <Text>otherParam: {JSON.stringify(otherParam)}</Text>
          <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        </View>
      );
    }
  }