import React, { Component } from 'react';
import {
  View,Text,StyleSheet,FlatList,Image,TouchableOpacity
} from 'react-native';
import Constants from 'expo-constants';
import {createStackNavigator} from '@react-navigation/stack' 
import {NavigationContainer,useNavigation } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import {Card,Avatar,Title,Paragraph} from 'react-native-paper';
import * as data from './data.json';
class Home extends Component {
  constructor(props){
    super(props);
     this.state = {
 
    };
  }


  renderItem=({item})=>{

    return(
      <View style={{padding:8}}>
        <Card>
            <Card.Title title={item.name} subtitle="ใส่วันที่" 
            left={()=>(<Avatar.Image size={50} source={{uri:item.url}}/>)}/>
            {/* <Card.Content>
              <Title>{item.name}</Title>
            </Card.Content> */}
            <Card.Content>
            <Paragraph><Text>{item.description}</Text></Paragraph>
            </Card.Content>
            {item.type=="img"&&<Card.Cover source={{uri:item.url}}/>}
          </Card>
      </View>
    );
  };


  render(props) {
    const { navigation } = this.props;
    return (
      <View style={{flex:1}}>
        {/* <Text>kjcflkbcgk</Text> */}
      <FlatList
        data={data.test}
        keyExtractor = {item=>item.id}
        renderItem={this.renderItem}
    />
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
    },
    postBar:{
      width:"100%",
      height:"20%",
      backgroundColor:"white",
      flexDirection:'row'

    }
  });


export default Home;