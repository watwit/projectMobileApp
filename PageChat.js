import React, { Component } from 'react';
import {
  View,Text,StyleSheet,Image,FlatList
} from 'react-native';


class PageChat extends Component {
  constructor(props){
    super(props);
     this.state = {
      messages:[],
    };
  }

  render(props) {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1,backgroundColor:"#E5E5E5",justifyContent:"center",alignItems:'center' }}>
            <Text style={{color:"white"}}>PageChat</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  });


export default PageChat;