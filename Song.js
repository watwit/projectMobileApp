import React, { Component } from 'react';
import {
  View,Text,StyleSheet,Image,TouchableOpacity,FlatList,Modal,TextInput
} from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import * as song from './song.json'
class Song extends Component {
  constructor(props){
    super(props);
     this.state = {
        showModal:false
    };
  }
  renderItem=({item})=>{
    return(
      <View>
      <View style={{backgroundColor:'white',height:100,width:'95%',borderWidth:1,borderRadius:10,marginRight:20,flexDirection:'row',marginBottom:15}}>
            <View style={{height:'80%',width:'15%',borderRadius:10,margin:10,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                <Text style={{color:'black',marginLeft:10,fontSize:20,fontFamily:'kanitSemiBold'}}>{item.id}</Text>
                <View style={{width:1,height:'80%',backgroundColor:'black',marginTop:10,marginLeft:20}}></View>
            </View>
            <View style={{backgroundColor:'#E2E2E2',height:'80%',width:'18%',borderRadius:10,margin:10,marginLeft:1,justifyContent:'center',alignItems:'center'}}>
                <Image source={{uri:'https://image.flaticon.com/icons/png/512/126/126493.png'}} style={{height:'55%',width:'60%'}}></Image>
            </View>
            <View style={{width:1,height:'80%',backgroundColor:'white',marginTop:10,marginRight:1}}></View>
            <View style={{marginTop:5,marginBottom:5}}>
                <Text style={{color:'black',marginLeft:10,fontSize:20,fontFamily:'kanitSemiBold'}}>{item.name}</Text>
                <Text style={{color:'#8B8B8B',marginLeft:10,marginTop:5,fontSize:15,fontFamily:'kanitSemiBold'}}>{item.singer}</Text>
                <Text style={{color:'#8B8B8B',marginLeft:10,marginTop:5,fontSize:15,fontFamily:'kanitSemiBold'}}>{"ให้โต๊ะ "+item.table}</Text>
            </View>
        </View>
      </View>
    );
  }
  render(props) {
    const { navigation } = this.props;
    
    return (
      <View>
        <View style={{backgroundColor:'black',height:100,width:'90%',borderWidth:1,borderRadius:10,marginLeft:20,marginRight:20,flexDirection:'row',marginBottom:15}}>
            <View style={{backgroundColor:'#E2E2E2',height:'80%',width:'23%',borderRadius:10,margin:10,justifyContent:'center',alignItems:'center'}}>
                <Image source={{uri:'https://image.flaticon.com/icons/png/512/49/49831.png'}} style={{height:'80%',width:'23%'}}></Image>
            </View>
            <View style={{width:1,height:'80%',backgroundColor:'white',marginTop:10}}></View>
            <View style={{marginTop:5,marginBottom:5}}>
                <Text style={{color:'white',marginLeft:10,fontSize:20,fontFamily:'kanitSemiBold'}}>จี่หอย</Text>
                <Text style={{color:'#8B8B8B',marginLeft:10,marginTop:5,fontSize:15,fontFamily:'kanitSemiBold'}}>พี สะเดิด</Text>
                <Text style={{color:'#8B8B8B',marginLeft:10,marginTop:5,fontSize:15,fontFamily:'kanitSemiBold'}}>ให้โต๊ะ18</Text>
            </View>
        </View>
        <View style={{backgroundColor:'black',width:'50%',height:30,borderRadius:5,marginLeft:20,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontFamily:'kanitSemiBold',color:'white'}}>คิวเพลงทั้งหมด 3 เพลง</Text>
        </View>
        <View style={{height:'100%',marginTop:20,marginLeft:20}}>
            <FlatList
            data={song.test}
            keyExtractor = {item=>item.id}
            renderItem={this.renderItem}
            ref={(ref)=>{this.FlatListRef=ref}}
          />
          <View style={{height:'50%',width:'95%',alignItems:'flex-end'}}>
            <TouchableOpacity onPress={()=>{this.setState({showModal:true})}}>
              <View style={{backgroundColor:'#FB7070',height:60,width:60,borderRadius:50,alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:'white',fontSize:40}}>&#43;</Text>
              </View>
              <Modal transparent={true} visible={this.state.showModal} animationType="slide">
            <View  style={{backgroundColor:'#00000070',height:850}}>
                <View style={{backgroundColor:'white',marginTop:200,marginBottom:250,marginLeft:30,marginRight:30,borderRadius:10,flex:3}}>
                    <View style={{height:100,width:'100%',borderRadius:10,justifyContent:'center',alignItems:'center',flex:2}}>
                    <View style={{marginTop:100,backgroundColor:'#E2E2E2',height:'90%',width:'20%',borderRadius:10,justifyContent:'center',alignItems:'center'}}>
                        <Image source={{uri:'https://image.flaticon.com/icons/png/512/126/126493.png'}} style={{height:'55%',width:'60%'}}></Image>
                    </View>
                    <View style={{marginTop:10,marginBottom:30}}>
                      <Text style={{fontSize:20,fontFamily:'kanitSemiBold'}}>ขอคิวเพลง</Text>
                    </View>
                        
                    </View>
                    <View style={{height:1,backgroundColor:'#65656590',marginTop:60,marginLeft:15,marginRight:15}}></View> 
                    <View style={{flex:3,justifyContent:'space-around',padding:10}}>
                        <View style={{height:'30%',borderRadius:35,borderWidth:1,justifyContent:'center',alignItems:'center'}} >
                            <TextInput placeholder='ป้อนชื่อเพลง' style={{width:'80%',fontFamily:'kanitSemiBold'}}></TextInput>
                        </View>
                        <View style={{height:'30%',borderRadius:35,borderWidth:1,justifyContent:'center',alignItems:'center'}} >
                          <TextInput placeholder='ศิลปิน' style={{width:'80%',fontFamily:'kanitSemiBold'}}></TextInput>
                        </View>
                        <View style={{height:'30%',borderRadius:35,borderWidth:1,justifyContent:'center',alignItems:'center'}} >
                            <TextInput placeholder='รายละเอียดเพิ่มเติม' style={{width:'80%',fontFamily:'kanitSemiBold'}}></TextInput>
                        </View>
                    </View>

                    {/* //////////////////////////////////////////////////////// */}
                    <View style={{height:1,backgroundColor:'#65656590',marginLeft:15,marginRight:15}}></View> 
                    <View style={{flex:2,justifyContent:'center',flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>{this.setState({showModal:false})}}>
                    <View style={{alignItems:'center',justifyContent:'center',marginRight:80,height:'100%'}}>
                         <Text style={{fontSize:17,marginTop:16,fontFamily:'kanitSemiBold'}}>ยกเลิก</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this.setState({showModal:false})}}>
                      <View style={{justifyContent:'center',alignItems:'center',marginLeft:80,height:'100%'}}>
                         <Text style={{color:'#8B63FB',fontSize:17,marginTop:16,fontFamily:'kanitSemiBold'}}>ส่งคำขอ</Text>
                      </View>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
          </Modal>
            </TouchableOpacity>
          </View>
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


export default Song;