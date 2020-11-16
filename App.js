import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {
  View,Text,TouchableOpacity
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Constants from 'expo-constants';
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
import { EvilIcons } from '@expo/vector-icons';

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
        <Stack.Navigator screenOptions={{
          headerTintColor:'blue',
          headerStyle:{
            backgroundColor:'black'
          }
        }}>
          <Stack.Screen name="Spalsh" 
            component={SpalshScreen} 
            options={{ headerShown: false}}/>

          <Stack.Screen name="Login" 
            component={LoginScreen} 
            options={{ headerShown: false}}/>

          <Stack.Screen name="Register" 
            component={RegisterScreen} 
            options={{ headerShown: false}}/>

          <Stack.Screen name="ForgotPassword" 
            component={ForgotPasswordScreen} 
            options={{ headerShown: false}}/>
          
          <Stack.Screen options={{
            title: "CPEขี้เมา",

          headerRight: () => (
            <View style={{flexDirection:'row',flex:1,justifyContent:'flex-end',alignItems:'center'}}>
                <TouchableOpacity>
                    <View style={{backgroundColor:'#565656',width:40,height:40,borderRadius:6,justifyContent:'center',alignItems:'center',marginRight:15}}>
                      <FontAwesome5 style={{margin:5}} name="user-friends" size={20} color="white" />
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={{backgroundColor:'#565656',width:40,height:40,borderRadius:6,justifyContent:'center',alignItems:'center',marginRight:10}}>
                        <Entypo style={{margin:5}} name="chat" size={24} color="white" />
                    </View>
                  </TouchableOpacity>
            </View>
          )}} name="Bottomtab" component={MyBottomTab}/>

        </Stack.Navigator>
      );
}

const BottomTab=createBottomTabNavigator();
function MyBottomTab(){
  return(
    <BottomTab.Navigator 
      tabBarOptions={{activeTintColor:"white",
      inactiveColor:"gray",
      backgroundColor:'#000000',
      style:{
        backgroundColor: '#000000'
      }}}>
      <BottomTab.Screen 
      options={{tabBarIcon:({color})=>(<AntDesign name="home" size={40} color={color} />),tabBarLabel:() => {return null}}}
      name="TopTap" component={MyTopTap}/>

    <BottomTab.Screen 
      options={{tabBarIcon:({color})=>(<AntDesign name="qrcode" size={40} color={color} />),tabBarLabel:() => {return null}}} 
      name="QrCode" component={QrCodeScreen}/>
      
    <BottomTab.Screen 
      options={{tabBarIcon:({color})=>(<EvilIcons name="user" size={50} color={color} />),tabBarLabel:() => {return null}}} 
      name="Profile" component={ProfileScreen}/>
      
    </BottomTab.Navigator>
  );
}

const TopTab = createMaterialTopTabNavigator();
function MyTopTap(){
  return(
    <TopTab.Navigator  tabBarOptions={{activeTintColor:"black",
    //inactiveColor:"white",
    backgroundColor:'#black',
    pressColor:'black',
    style:{
      backgroundColor: 'white',
      position: 'absolute',
      top:"3%",
      right: 10,
      left: 10,
      borderRadius:5
    }}}>
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
