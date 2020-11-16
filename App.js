import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {
  View,Text
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

import Spalsh from './Spalsh'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import Song from './Song'
import ForgotPassword from './ForgotPassword'
import QrCode from './QrCode'
import Profile from './Profile'
import Food from './Food'

import { AntDesign } from '@expo/vector-icons';

const SpalshScreen =()=> {
  const navigation = useNavigation();
  return (
    <Spalsh navigation={navigation} />
  );
}

const LoginScreen =()=> {
  const navigation = useNavigation();
  return (
    <Login navigation={navigation} />
  );
}

const RegisterScreen =()=> {
  const navigation = useNavigation();
  return (
    <Register navigation={navigation} />
  );
}

const ForgotPasswordScreen =()=> {
  const navigation = useNavigation();
  return (
    <ForgotPassword navigation={navigation} />
  );
}

const HomeScreen =()=> {
  const navigation = useNavigation();
  return (
    <Home navigation={navigation} />
  );
}

const QrCodeScreen =()=> {
  const navigation = useNavigation();
  return (
    <QrCode navigation={navigation} />
  );
}

const ProfileScreen =()=> {
  const navigation = useNavigation();
  return (
    <Profile navigation={navigation} />
  );
}
const FoodScreen =()=> {
  const navigation = useNavigation();
  return (
    <Food navigation={navigation} />
  );
}
const SongScreen =()=> {
  const navigation = useNavigation();
  return (
    <Song navigation={navigation} />
  );
}

const Stack = createStackNavigator();
const MyStack=()=>{
      return (
        <Stack.Navigator>
          <Stack.Screen name="Spalsh" 
            component={SpalshScreen} 
            options={{ headerShown: false}}/>

          <Stack.Screen name="Login" 
            component={LoginScreen} 
            options={{ headerShown: true}}/>

          <Stack.Screen name="Register" 
            component={RegisterScreen} 
            options={{ headerShown: true}}/>

          <Stack.Screen name="ForgotPassword" 
            component={ForgotPasswordScreen} 
            options={{ headerShown: true}}/>
          
          <Stack.Screen options={{headerShown:false}} name="Bottomtab" component={MyBottomTab}/>

        </Stack.Navigator>
      );
}

const BottomTab=createBottomTabNavigator();
function MyBottomTab(){
  return(
    <BottomTab.Navigator 
      activeColor="white"
      inactiveColor="gray">
      <BottomTab.Screen 
      options={{tabBarIcon:({color})=>(<AntDesign name="home" size={24} color={color} />)}} 
      name="TopTap" component={MyTopTap}/>

    <BottomTab.Screen 
      name="QrCode" component={QrCodeScreen}/>
      
    <BottomTab.Screen 
      name="Profile" component={ProfileScreen}/>
      
    </BottomTab.Navigator>
  );
}

const TopTab = createMaterialTopTabNavigator();
function MyTopTap(){
  return(
    <TopTab.Navigator>
      <TopTab.Screen name="Home" component={HomeScreen}/>
      <TopTab.Screen name="Food" component={FoodScreen}/>
      <TopTab.Screen name="Song" component={SongScreen}/>
    </TopTab.Navigator>
  );
}

export default class App extends Component {

  constructor(props){
    super(props);
     this.state = {
 
    };
  }

  render(props) {
    return (
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
    );
  }
}
