import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Image, FlatList, TextInput, TouchableOpacity
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
class PageChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [{
        id: '1',
        sender: "Watcharawit",
        content: 'หวัดดี ครับ A !!',
        createdAt: '2020-10-03T14:48:00.000Z',
      }, {
        id: '2',
        sender: "B",
        content: 'หวัดดี ครับ B !!',
        createdAt: '2020-10-03T14:48:00.000Z',
      }],
    };
    const { route } = this.props;
    this.username = route.params.username;
    this.room = route.params.roomID;
    console.log("Username :" + this.username + " Room: " + this.room)
  }
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 8,
        }}
      />
    );
  };
  renderItem = ({ item }) => {
    console.log(item.message)
    return (
      <View>
        {item.sender===this.username&&
        <View style={{flexDirection:"row",justifyContent:"flex-end"}}>
          <View style={styles.Sender}>
              <Text style={styles.txtSender} >{item.content}</Text>
          </View>
          
       </View>}

       {item.sender!==this.username&&
        <View style={{flexDirection:"row",borderRadius:20}}>
          <View style={styles.Receiver}>
              <Text style={styles.txtReceiver}>{item.content}</Text>
          </View>
       </View>}
      </View>
    );
  }

  render(props) {
    return (
        <View style={{ flex: 1,backgroundColor: '#E5E5E5' }}>
          <View style={styles.content}>
            <FlatList
              data={this.state.messages}
              renderItem={this.renderItem}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={this.renderSeparator}
              ref={(ref) => { this.flatListRef = ref; }}
              onContentSizeChange={() => this.flatListRef.scrollToEnd()}
            />
          </View>

        <View style={styles.chatContent}>
          <TextInput
            placeholder="Message"
            style={styles.textInput}
            onChangeText={txt => { this.setState({ text: txt }) }} />

          <TouchableOpacity
            onPress={this.onSend}>
            <MaterialCommunityIcons name="send-circle" size={50} color="#C4C4C4" />
          </TouchableOpacity>
        </View>
      </View >
    );
  }
}
const styles = StyleSheet.create({
  textInput: {
    height:45,
    flex: 1,
    borderColor: 'gray',
    paddingStart: 20,
    backgroundColor:'#C4C4C4',
    borderRadius:30,
    margin:5
  },
  content: {
    flex: 1,
    padding: 16,
    marginBottom: 8,
    width: "100%",
  },
  chatContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor:'black'
  },
  Receiver: {
    flexWrap: 'wrap',
    // borderTopRightRadius:20,
    // borderTopLeftRadius:20,
    // borderBottomRightRadius:20,
    // borderWidth:1,
    borderRadius: 20,
    padding: 8,
    flexShrink: 1,
    //borderColor:"red",
    backgroundColor: "#C0C0C0",

  },
  Sender: {
    flexWrap: 'wrap',
    // borderTopLeftRadius:20,
    // borderTopRightRadius:20,
    // borderBottomLeftRadius:20,
    // borderWidth:1,
    padding: 8,
    flexShrink: 1,
    borderRadius: 20,
    //borderColor:"black",
    backgroundColor: "#FFFFFF",
  },
  txtSender:{
    color:'black',
    fontSize:18
  },
  txtReceiver:{
    color:'black',
    fontSize:18
  }
});



export default PageChat;