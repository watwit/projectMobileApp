import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {
  View,Text
} from 'react-native';
import Spalsh from './Spalsh'
import Login from './Login'
import Register from './Register'
import ForgotPasssword from './ForgotPassword'
export default class App extends Component {

  constructor(props){
    super(props);
     this.state = {
 
    };
  }

  render(props) {
    return (
      <ForgotPasssword/>
    );
  }
}
