import moment from 'moment';
import React, { Component } from 'react';
import {
  View,Text,StyleSheet,Image,FlatList,TouchableOpacity,
} from 'react-native';

class Chat extends Component {
  constructor(props){
    super(props);
     this.state = {
        user:[{
          id: '1',
          users:{
            id: 'u2',
            name: 'Watcharawit',
            imageUri: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
          },
          lastMessage: {
            id: 'm1',
            content: 'hi!',
            createdAt: '2020-10-03T14:48:00.000Z',
          }
        },
        {
          id: '2',
          users:{
            id: 'u2',
            name: 'Watcharawit1',
            imageUri: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
          },
          lastMessage: {
            id: 'm1',
            content: 'hiaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!!',
            createdAt: '2020-10-03T14:48:00.000Z',
          }
        }],
    };
  }
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: "#dddddd",
        }}
      />
    );
  };
  renderItem=({item})=>{
    return(
      <View>
        <TouchableOpacity style={{backgroundColor:"#E5E5E5"}}  onPress={()=>this.props.navigation.navigate("PageChat")} >
            <View style={styles.container}>
                <View style={styles.lefContainer}>
                  <Image style={styles.profile} source={{uri:item.users.imageUri}}/>
                    <View style={styles.midContainer}>
                      <Text style={styles.name}>{item.users.name}</Text>
                      <Text style={styles.lastMessage} numberOfLines={1}>{item.lastMessage.content}</Text>
                    </View>
                </View>
                <Text style={styles.time}>{moment(item.lastMessage.createdAt).format("DD/MM/YYYY")}</Text>
	        </View>
        </TouchableOpacity>
      </View>
    );
  }
  render(props) {
    const { navigation } = this.props;
    return (
      <View style={{flex:1}}>
        <FlatList
          style={{width:"100%"}}
          data={this.state.user}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-between',
    padding: 10,
    // marginVertical: 8,
  },
  lefContainer:{
    flexDirection:'row',
  },
  midContainer:{
    justifyContent:'space-around',
  },
  profile:{
    height:60,
    width:60,
    borderRadius:50,
    borderWidth:3,
    marginRight:15,
    borderColor:'white'
  },
  name: {
    fontSize: 18,	
    fontWeight:"bold",
    },
  lastMessage:{
    fontSize:16,
    color:'gray',
    width:100
  },
  time:{
    fontSize:16,
    color:'gray'
  }
  });


export default Chat;