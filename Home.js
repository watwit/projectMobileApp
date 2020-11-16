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
            <View style={styles.header}>
              <View style={{flex:1,justifyContent:'center'}}>
                <Text style={{color:"white",fontSize:15,marginLeft:15}}>CPEขี้เมา</Text>
              </View>

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
              
            </View>
            <Text style={{color:"white",justifyContent:'center',alignItems:'center'}}>Home</Text>
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