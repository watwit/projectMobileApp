import React, { Component } from 'react';
import {
  View,Text,StyleSheet,Image,ActivityIndicator
} from 'react-native';
import * as Animatable from 'react-native-animatable';
class Splash extends Component {
  constructor(props){
    super(props);
     this.state = {
 
    };
  }
   componentDidMount() {
        setTimeout(() => {
          this.props.navigation.navigate('Login');
          this.props.navigation.reset({index:0,routes:[{name:'Login'}]}) 
        }, 2500)
    }
  render(props) {
    const { navigation } = this.props;
    return (
        <View style={{ flex: 1,backgroundColor:"#000000" }}>
            <View style={styles.top}></View>
            <View style={styles.middle}>
                <View style={{flexDirection:"row"}}>
                    <Animatable.View animation="slideInLeft">
                        <View>
                            <Image
                                style={styles.imageLeft}
                                source={require('./images/beer.png')}
                            />
                        </View>
                    </Animatable.View>
                    <Animatable.View animation="slideInRight">
                        <View>
                            <Image
                                style={styles.imageRight}
                                source={require('./images/beer.png')}
                            />
                        </View>
                    </Animatable.View>
                </View>
                 <Text style={{color:"white", fontSize:32,position:'relative',top:"5%",fontFamily:'sanam'}}>CPE ขี้เมา</Text>
            </View>
            <View style={styles.bottom}></View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
    top:{
        flex:1
    },
    middle: {
        flex:2,
        justifyContent:"center",
        alignItems:"center"
    },
    bottom:{
        flex:1,
    },
    imageLeft: {
        width: 138,
        height: 138,
        resizeMode:'contain',
        alignSelf:'center',
        marginBottom:8,
        transform: [{ rotate: "-14.73deg"},{rotateY:"180deg"}],
        position:"relative",
        top:15
    },
    imageRight: {
        width: 138,
        height: 138,
        resizeMode:'contain',
        alignSelf:'center',
        marginBottom:8,
        transform: [{ rotate: "14.73deg" }],
    },
  });


export default Splash;