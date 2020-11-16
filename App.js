import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {
  View,Text
} from 'react-native';
import Spalsh from './Spalsh'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import Song from './Song'
import ForgotPasssword from './ForgotPassword'
import Splash from './Spalsh';
import {createStackNavigator} from '@react-navigation/stack' 
import {NavigationContainer,useNavigation } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
export default class App extends Component {

  constructor(props){
    super(props);
     this.state = {
 
    };
  }

  render(props) {
    return (
      <Home/>
    );
  }
}
