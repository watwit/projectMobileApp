import React, { Component } from 'react';
import {
  View,Text,StyleSheet,Image
} from 'react-native';


class QrCode extends Component {
  constructor(props){
    super(props);
     this.state = {
 
    };
  }

  render(props) {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1,backgroundColor:"#000000",justifyContent:"center",alignItems:'center' }}>
            <Text style={{color:"white"}}>QrCode</Text>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  });


export default QrCode;