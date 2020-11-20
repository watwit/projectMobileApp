import React, { Component } from 'react';
import {
  View,Text,StyleSheet,FlatList,Image,TouchableOpacity,Modal,TextInput
} from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import * as meno from './meno.json';
import * as listFood from './listFood.json';

class Food extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedID:1,
      searchText:null,
      showModal:false,
      id:1,
      count:1,
      catagory:""
   };
  }
  renderSeparator=()=>{
    return(
      <View style={{height:1,backgroundColor:'black'}}></View>
    );
  }
  renderItem=({item})=>{
    let backgroundColor = null;
    let textcolor = "black";
    if(this.state.selectedID==item.id){
      backgroundColor="#FB7070";
      textcolor = "white";
    }
    else{
      backgroundColor="white"
    }
    return(
      <View style={{marginLeft:20}}>
        <TouchableOpacity onPress={()=>{this.setState({selectedID:item.id})}} style={{backgroundColor:backgroundColor,borderRadius:5}}>
        <View style={{height:27,width:'100%'}}>
              <Text style={{margin:5,fontSize:11,color:textcolor}}>{item.name}</Text>
        </View>
        </TouchableOpacity>
      </View>
    );
  };
  countMinus=()=>{
    if(this.state.count>1){
      this.setState({count:this.state.count-1})
    }
  }
  renderFood=({item})=>{
    return(
      <View style={{padding:8}}>
        <TouchableOpacity onPress={()=>{this.setState({showModal:true}),this.setState({id:item.id})}}>
          <View style={{backgroundColor:'white',
                        height:120,width:'94%',
                        borderRadius:15,borderWidth:1,
                        flexDirection:'row',
                        alignItems:'center',
                        marginLeft:10,
                        }}>
            <Image source={{uri:item.url}} style={{height:80,width:80,marginLeft:15,borderRadius:15}}/>
            <Text style={{marginLeft:60,fontSize:20}}>{item.name}</Text>
            <Text style={{marginRight:10,marginLeft:30,fontSize:20}}>{item.price+" บาท"}</Text>
          </View>
          {item.id==this.state.id&&<Modal transparent={true} visible={this.state.showModal} animationType="slide">
            <View  style={{backgroundColor:'#00000060',flex:1}}>
                <View style={{backgroundColor:'white',marginTop:100,marginBottom:200,marginLeft:20,marginRight:20,borderRadius:10,flex:1}}>
                    <View style={{height:'10%',width:'100%',borderRadius:10,justifyContent:'center',alignItems:'center',flex:2}}>
                        <Text style={{fontSize:20,fontFamily:'kanitSemiBold'}}>การสั่งซื้อ</Text>
                    </View>
                    <View style={{height:1,backgroundColor:'#656565'}}></View> 
                    <View style={{flex:10,alignItems:'center'}}>
                      <View style={{height:140,width:140,borderRadius:20,marginTop:30,justifyContent:'center',alignItems:'center',borderWidth:1}}>
                        <Image source={{uri:item.url}} style={{height:120,width:120,borderRadius:10}}></Image>
                      </View>
                        
                        <Text style={{fontSize:20,marginTop:15,fontFamily:'kanitSemiBold'}}>{item.name}</Text>
                        <Text style={{fontSize:15,marginTop:35,fontFamily:'kanitSemiBold'}}>จำนวน</Text>
                        <View style={{flexDirection:'row',marginTop:2}}>
                          <TouchableOpacity onPress={this.countMinus}>
                            <View style={{height:50,width:50,borderRadius:25,backgroundColor:'gray',justifyContent:'center',alignItems:'center',shadowOffset: {
                                width: 0,
                                height: 2
                              },
                              shadowOpacity: 0.25,
                              shadowRadius: 3.84,}}>
                          <Text style={{fontFamily:'kanitSemiBold',fontSize:20,color:'white'}}>&#8722;</Text></View>
                          </TouchableOpacity>
                          
                          <View style={{borderWidth:1,height:52,width:'40%',borderRadius:35,justifyContent:'center',alignItems:'center'}}><Text style={{fontFamily:'kanitSemiBold'}}>{this.state.count}</Text></View>
                           <TouchableOpacity onPress={()=>{this.setState({count:this.state.count+1})}}>
                             <View style={{height:50,width:50,borderRadius:25,backgroundColor:'#00B2FF',justifyContent:'center',alignItems:'center',shadowOffset: {
                                width: 0,
                                height: 2
                              },
                              shadowOpacity: 0.25,
                              shadowRadius: 3.84,}}>
                            <Text style={{fontFamily:'kanitSemiBold',fontSize:20,color:'white'}}>&#43;</Text></View>
                           </TouchableOpacity>
                           
                        </View>
                      <Text style={{fontSize:15,marginTop:15,fontFamily:'kanitSemiBold'}}>{"ราคา: "+item.price*this.state.count}</Text>
                    </View>
                    <View style={{height:1,backgroundColor:'#656565'}}></View> 
                    <View style={{flex:2,justifyContent:'center',flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>{this.setState({showModal:false}),this.setState({count:1})}}>
                    <View style={{alignItems:'center',justifyContent:'center',marginRight:80}}>
                         <Text style={{fontFamily:'kanitSemiBold',fontSize:17,marginTop:25}}>ยกเลิก</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this.setState({showModal:false}),this.setState({count:1})}}>
                      <View style={{justifyContent:'center',alignItems:'center',marginLeft:80}}>
                         <Text style={{fontFamily:'kanitSemiBold',color:'#8B63FB',fontSize:17,marginTop:25}}>สั่งซื้อ</Text>
                      </View>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
          </Modal>}
        </TouchableOpacity>
        
      </View>
    );
  }

  render(props) {
    const { navigation } = this.props;
    return (
      <View >
            <View style={{height:50,width:'100%'}}>
              <FlatList
            horizontal
            data={meno.food}
            keyExtractor = {item=>item.id,item=>item.type}
            renderItem={this.renderItem}
            ItemSeparatorComponent={this.renderSeparator}
            ref={(ref)=>{this.FlatListRef=ref}}
            />
            </View>
            <View style={{height:'93%'}}>
                <FlatList
                data={listFood.list}
                keyExtractor = {item=>item.id}
                renderItem={this.renderFood}
                //ItemSeparatorComponent={this.renderSeparator}
                ref={(ref)=>{this.FlatListRef=ref}}
              />
            </View>
    
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