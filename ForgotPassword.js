import React, { Component } from 'react';
import {
  View,Text,StyleSheet,TextInput,TouchableOpacity,Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import firestore from './firebase/Firestore'
class ForgotPassword extends Component {
  constructor(props){
    super(props);
     this.state = {
        check_textInputChange:false,
        email:null
    };
  }
  
  textInputChange=(value)=>{
    if(value.length!==0){
        this.setState({check_textInputChange:true})
        this.setState({email:value})
    }
    else{
        this.setState({check_textInputChange:false})
    }
  }
  unsuccess=(error)=>{
    Alert.alert(
        "ResetPassword Fail",
        error.message,
        [
          { text: "OK"}
        ],
        { cancelable: false }
    );
  }

  success=()=>{
    Alert.alert(
        "ResetPassword Success",
        "Check Your E-mail",
        [
          { text: "OK",onPress: () => this.props.navigation.navigate("Login")}
        ],
        { cancelable: false }
    );
  }
  resetPassword=()=>{
      if(!this.state.check_textInputChange){
        Alert.alert(
            "ResetPassword Fail",
             "กรุณากรอก E-mail",
            [
              { text: "OK"}
            ],
            { cancelable: false }
        );
      }
      else{
        firestore.recoverAccount(this.state.email,this.success,this.unsuccess)
      }
  }

  render(props) {
    const { navigation } = this.props;
    return (
        <View style={{ flex: 1,backgroundColor:"#000000" }}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Forgot Password?</Text>
            </View>
            <Animatable.View animation="fadeInUpBig" style={styles.footer}>
                <Text style={styles.text_footer}>Enter your e-mail address we'll send you a link to reset  your password</Text>
                <Text style={[styles.text_footer,{marginTop:30}]}>E-Mail</Text>
                <View style={styles.action}>
                    <FontAwesome5 name="user-circle" size={20} color="black" />
                    <TextInput 
                        placeholder="Your E-Mail"
                        style={styles.text_input}
                        onChangeText={(text)=>this.textInputChange(text)}
                    />
                    {this.state.check_textInputChange ?
                    <Animatable.View animation="bounceIn">
                        <Ionicons name="md-checkmark-circle-outline" size={20} color="red" /> 
                    </Animatable.View>
                    : null}
                </View>
                <View style={styles.botton}>
                    <TouchableOpacity style={[styles.send,{marginTop:15}]} onPress={this.resetPassword}>
                        <Text style={styles.text_send}>Send</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
            
        </View>
    );
  }
}
const styles = StyleSheet.create({
    header:{
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal:20,
        paddingBottom:50
    },
    footer:{
        flex:3,
        backgroundColor:"white",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:20,
        paddingVertical:30
    },
    text_header:{
        color:"white",
        fontSize:30,
        fontFamily:'kanitSemiBold'
    },
    text_footer:{
        fontSize:18,
        fontFamily:'kanitLight'
    },
    action:{
        flexDirection:"row",
        marginTop:10,
        borderBottomWidth:1,
        borderColor:"#C4C4C4",
        paddingBottom:5
    },
    text_input:{
        flex:1,
        paddingLeft:10,
        fontSize:18,
        fontFamily:'kanitLight'
    },
    botton:{
        alignItems:"center",
        marginTop:50,
    },
    send:{
        width:"100%",
        height:50,
        backgroundColor:"#C4C4C4",
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        borderColor:"#000000",
        borderWidth:1
    },
    text_send:{
        color:"black",
        fontSize:18,
        fontFamily:'kanitSemiBold'
    },
  });


export default ForgotPassword;