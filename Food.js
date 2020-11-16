import React, { Component } from 'react';
import {
  View,Text,StyleSheet,Image
} from 'react-native';


class Food extends Component {
  constructor(props){
    super(props);
     this.state = {
 
    };
  }

  render(props) {
    const { navigation } = this.props;
    return (
        <View style={{ flex: 1,backgroundColor:"#000000" }}>
            <Text style={{color:"white"}}>Food</Text>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  });


export default Food;