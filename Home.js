import React, { Component } from 'react';
import {
  View,Text,StyleSheet,Image,TouchableOpacity
} from 'react-native';
import Constants from 'expo-constants';
import {createStackNavigator} from '@react-navigation/stack' 
import {NavigationContainer,useNavigation } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


class Home extends Component {
  constructor(props){
    super(props);
     this.state = {
 
    };
  }


  render(props) {
    const { navigation } = this.props;
    return (
        <View style={{ flex: 1,backgroundColor:"#F1F1F1" ,paddingTop: Constants.statusBarHeight,}}>
            
        </View>
    );
  }
}
const styles = StyleSheet.create({
    header:{
      width:'100%',
      height:'8%',
      backgroundColor:'black',
      flexDirection:'row',
    }
  });


export default Home;