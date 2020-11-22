import React, { Component } from 'react';
import {
  View,Text,StyleSheet,FlatList,Image,TouchableOpacity, Modal,TextInput
} from 'react-native';
import Constants from 'expo-constants';
import {createStackNavigator} from '@react-navigation/stack' 
import {NavigationContainer,useNavigation } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import {Card,Avatar,Title,Paragraph} from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as data from './data.json';
class Home extends Component {
  constructor(props){
    super(props);
     this.state = {
      showModal:false,
      picture:null
    };
  }


  renderItem=({item})=>{

    return(
      <View style={{padding:8}}>
        <Card>
            <Card.Title  title={item.name} subtitle="ใส่วันที่" 
            left={()=>(<Avatar.Image size={50} source={{uri:item.url}}/>)}/>
            {/* <Card.Content>
              <Title>{item.name}</Title>
            </Card.Content> */}
            <Card.Content>
            <Paragraph><Text style={{fontFamily:'kanitRegular'}}>{item.description}</Text></Paragraph>
            </Card.Content>
            {item.type=="img"&&<Card.Cover source={{uri:item.url}}/>}
          </Card>
      </View>
    );
  };

  pickImage= async()=>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.All,
      allowsEditing:true,
      quality:1
    });

    if(!result.cancelled){
      console.log(result);
      this.setState({picture:result.uri});
    }
  }

  render(props) {
    const { navigation } = this.props;
    return (
      <View style={{flex:1}}>
        {/* <Text>kjcflkbcgk</Text> */}
        <View style={styles.postStatus}>
            <Image style={{height:50,width:50,borderRadius:50}} 
                   source={{uri:'https://scontent.fbkk23-1.fna.fbcdn.net/v/t1.0-9/106120566_3049250375195115_1160308528193104189_o.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFfLRFY8nsWPzaRCcMLitqYCLpinoXybFQIumKehfJsVP2YpNPfwK62kJ6zo5ChZO3UhLo3G1QN7X602rBhM-Fk&_nc_ohc=Rvmxq3WtlJgAX_ojFDr&_nc_ht=scontent.fbkk23-1.fna&oh=323ca4fb7b67911d8d2e4912768faced&oe=5FE00DA1'}}></Image>
            <TouchableOpacity style={{width:'80%'}} onPress={()=>{this.setState({showModal:true})}}>
              <View style={{backgroundColor:'#E1E1E1',height:40,width:'100%',borderRadius:40,justifyContent:'center'}}>
                <Text style={{marginLeft:10,fontFamily:'kanitRegular'}}>บอกความรู้สึกของคุณ</Text>
              </View>
            </TouchableOpacity>       
        </View>
        <Modal transparent={true} visible={this.state.showModal} animationType="slide">
            <View  style={{backgroundColor:'#00000060',height:830}}>
                <View style={{backgroundColor:'white',borderRadius:10,flex:1}}>

                    <View style={{flex:1,justifyContent:'center',flexDirection:'row'}}>
                      <TouchableOpacity style={{justifyContent:'center'}} onPress={()=>{this.setState({showModal:false}),this.setState({picture:null})}}>
                        <View >
                          <Ionicons style={{marginLeft:10}} name="md-arrow-round-back" size={24} color="black" />
                        </View>
                      </TouchableOpacity>
                      
                      <View style={{flex:1,justifyContent:'center'}}>
                        <Text style={{marginLeft:10,fontSize:20,fontFamily: 'kanitSemiBold'}}>การสร้างโพสต์</Text>
                      </View>
                      <TouchableOpacity onPress={()=>{this.setState({showModal:false}),this.setState({picture:null})}}>
                         <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
                            <Text style={{marginRight:10,fontSize:20,fontFamily: 'kanitSemiBold',color:'#6F0CEE'}}>โพสต์</Text>
                        </View>
                      </TouchableOpacity>
                     
                    </View>
                    <View style={{height:1,backgroundColor:'#00000060'}}></View>
                    <View style={{flex:10}}>
                      <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                            <Image style={{height:50,width:50,borderRadius:50,marginLeft:10}} 
                                   source={{uri:'https://scontent.fbkk23-1.fna.fbcdn.net/v/t1.0-9/106120566_3049250375195115_1160308528193104189_o.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFfLRFY8nsWPzaRCcMLitqYCLpinoXybFQIumKehfJsVP2YpNPfwK62kJ6zo5ChZO3UhLo3G1QN7X602rBhM-Fk&_nc_ohc=Rvmxq3WtlJgAX_ojFDr&_nc_ht=scontent.fbkk23-1.fna&oh=323ca4fb7b67911d8d2e4912768faced&oe=5FE00DA1'}}></Image>
                            <Text style={{marginLeft:10,fontSize:20,fontFamily:'kanitRegular'}}>Itthikorn Wisetpong</Text>
                      </View>
                      <View style={{flex:10}}>
                        <View style={{flex:1,margin:10,}}>
                          <TextInput multiline={true} placeholder="บอกความรู้สึกของคุณ..." style={{marginLeft:10,fontSize:18,width:'96%',fontFamily:'kanitRegular'}}></TextInput>
                          {this.state.picture!=null&&<Image style={{flex:1,marginTop:5,resizeMode:'cover'}} source={{uri:this.state.picture}}></Image>}
                        </View>
                        <View style={{flex:1}}>
                           <View style={{height:1,backgroundColor:'#00000060'}}></View>
                           <TouchableOpacity onPress={this.pickImage}>
                              <View style={{backgroundColor:'white',height:50,width:'100%',marginLeft:10,borderRadius:10,flexDirection:'row',alignItems:'center'}}>
                                <SimpleLineIcons style={{marginLeft:10}} name="picture" size={24} color="black" />
                                <Text style={{marginLeft:10,fontFamily:'kanitRegular'}}>รูปภาพ/วีดีโอ</Text>
                              </View>
                           </TouchableOpacity>
                         
                           <View style={{height:1,backgroundColor:'#00000060'}}></View>
                        </View>
                      </View>

                    </View>
                </View>
            </View>
        </Modal>
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
      flexDirection:'row',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
      elevation: 2,

    },
    postStatus:{
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
      elevation: 2,
      backgroundColor:'white',
      height:90,
      width:'96%',
      margin:8,
      borderRadius:5,
      flexDirection:'row',
      justifyContent:'space-evenly',
      alignItems:'center'
    },
  });


export default Home;