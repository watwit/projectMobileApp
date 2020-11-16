import React, { Component } from 'react';
import {
  View,Text,StyleSheet,TextInput,TouchableOpacity
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
class Login extends Component {
  constructor(props){
    super(props);
     this.state = {
        check_textInputChange:false,
        password:null,
        secureTextEntry:true
    };
  }
  
  textInputChange=(value)=>{
    if(value.length!==0){
        this.setState({check_textInputChange:true})
    }
    else{
        this.setState({check_textInputChange:false})
    }
  }
  secureTextEntry=()=>{
      this.setState({secureTextEntry:!this.state.secureTextEntry})
  }

  render(props) {
    const { navigation } = this.props;
    return (
        <View style={{ flex: 1,backgroundColor:"#000000" }}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome To...</Text>
            </View>
            <Animatable.View animation="fadeInUpBig" style={styles.footer}>
                <Text style={styles.text_footer}>E-Mail</Text>
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

                <Text style={[styles.text_footer,{marginTop:35}]}>Password</Text>
                <View style={styles.action}>
                    <AntDesign name="lock1" size={20} color="black" />
                    {this.state.secureTextEntry 
                    ? <TextInput 
                        placeholder="Your Password"
                        secureTextEntry={true}
                        style={styles.text_input}
                        value={this.state.password}
                        onChangeText={(text)=>this.setState({password:text})}
                      />
                    : <TextInput 
                        placeholder="Your Password"
                        style={styles.text_input}
                        value={this.state.password}
                        onChangeText={(text)=>this.setState({password:text})}
                     />
                    }
                    
                    <TouchableOpacity onPress={()=>this.secureTextEntry()}>
                        {this.state.secureTextEntry ?
                         <Feather name="eye-off" size={20} color="gray" />
                        : <Feather name="eye" size={20} color="gray" /> }
                       
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('ForgotPassword')}>
                    <Text style={{color:"#009db1",marginTop:15}}>Forgot password?</Text>
                </TouchableOpacity>
                <View style={styles.botton}>
                    <TouchableOpacity style={styles.signin} onPress={()=>this.props.navigation.navigate('Bottomtab')} >
                        <Text style={styles.text_singIn}>SignIn</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.signUp,{marginTop:15}]} onPress={()=>this.props.navigation.navigate('Register')}>
                        <Text style={styles.text_singUp}>SignUp</Text>
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
        fontWeight:"bold"
    },
    text_footer:{
        fontSize:18
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
        paddingLeft:10
    },
    botton:{
        alignItems:"center",
        marginTop:50,
    },
    signin:{
        width:"100%",
        height:50,
        backgroundColor:"#000000",
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center"
    },
    text_singIn:{
        color:"white",
        fontSize:18,
        fontWeight:'bold'
    },
    signUp:{
        width:"100%",
        height:50,
        backgroundColor:"#C4C4C4",
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        borderColor:"#000000",
        borderWidth:1
    },
    text_singUp:{
        color:"black",
        fontSize:18,
        fontWeight:'bold'
    },
  });


export default Login;