import React, { Component } from 'react';
import {
  View,Text,StyleSheet,FlatList,Image,TouchableOpacity
} from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import * as meno from './meno.json';

class Food extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedID:null,
      searchText:null,
   };
  }
  renderSeparator=()=>{
    return(
      <View style={{height:1,backgroundColor:'black'}}></View>
    );
  }
  renderItem=({item})=>{
    let backgroundColor = null
    if(this.state.selectedID==item.id){
      backgroundColor="#FB7070"
    }
    else{
      backgroundColor="white"
    }
    return(
      <View style={{marginLeft:20}}>
        <TouchableOpacity >
        <View style={{height:27,width:'100%',backgroundColor:'white',borderRadius:5}}>
              <Text style={{margin:5,fontSize:11}}>{item.name}</Text>
        </View>
        </TouchableOpacity>
      </View>
    );
  };


  render(props) {
    const { navigation } = this.props;
    return (
      <View style={{height:50,width:'100%'}}>
        {/* <Text>kjcflkbcgk</Text> */}
      <FlatList
         horizontal
        data={meno.food}
        keyExtractor = {item=>item.id}
        renderItem={this.renderItem}
        ItemSeparatorComponent={this.renderSeparator}
        ref={(ref)=>{this.FlatListRef=ref}}
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
  }
  });


export default Food;