import moment from 'moment';
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Modal
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      user: [{
        id: '1',
        users: {
          id: 'u2',
          name: 'Watcharawit',
          imageUri: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
          caption: 'โต๊ะ 8'
        },
        lastMessage: {
          id: 'm1',
          content: 'hi!',
          createdAt: '2020-10-03T14:48:00.000Z',
          sender: "1"
        }
      },
      {
        id: '2',
        users: {
          id: 'u2',
          name: 'Watcharawit1',
          imageUri: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
          caption: 'โต๊ะ 20'
        },
        lastMessage: {
          id: 'm1',
          content: 'hiaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!!',
          createdAt: '2020-10-03T14:48:00.000Z',
          sender: "2"
        }
      }],
    };
  }
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
  Header = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.txtHeader}>จำนวนคนในร้านทั้งหมด</Text>
      </View>
    )

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
  renderItem = ({ item }) => {
    return (
      <View style={{ backgroundColor: '#E5E5E5' }}>
        <TouchableOpacity onPress={() => { this.setModalVisible(true); }}>
          <View style={styles.container}>
            <View style={styles.lefContainer}>
              <Image style={styles.profile} source={{ uri: item.users.imageUri }} />
              <View style={styles.midContainer}>
                <Text style={styles.name}>{item.users.name}</Text>
                <Text style={styles.txtcaption} numberOfLines={1}>{item.users.caption}</Text>
              </View>
            </View>
            <TouchableOpacity>
              <View style={styles.addFriend}>
                <AntDesign name="adduser" size={26} color="black" />
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  render(props) {
    const { navigation } = this.props;
    const { modalVisible } = this.state;
    return (
      <View style={{ flex: 1}}>
        <this.Header />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalProfile}>
                <Image style={styles.modalImage} source={{ uri: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/106120566_3049250375195115_1160308528193104189_o.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFfLRFY8nsWPzaRCcMLitqYCLpinoXybFQIumKehfJsVP2YpNPfwK62kJ6zo5ChZO3UhLo3G1QN7X602rBhM-Fk&_nc_ohc=dYI0SFIF-0QAX_kTRXm&_nc_ht=scontent.fbkk11-1.fna&oh=8bc5e46e29c8296473275a62356c2aa2&oe=5FD824A1' }} />
              </View>
              <View style={{ height: 2, backgroundColor: 'gray', width: 300, margin: 20 }}></View>
              
              <View style={styles.modalMid}>
                <Text style={styles.modalName}>Itthikorn wisetpong</Text>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                  <View style={{ width: '20%', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'flex-end', paddingRight: 10 }}>
                    <MaterialIcons name="description" size={28} color="black" />
                    <AntDesign name="facebook-square" size={24} color="black" />
                    <AntDesign name="instagram" size={24} color="black" />
                    <FontAwesome5 name="line" size={24} color="black" />
                  </View>
                  <View style={{ width: '80%', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'flex-start' }}>
                    <Text style={styles.txtDescription}>โต๊ะ 18</Text>
                    <Text style={styles.txtDescription}>Itthikorn wisetpong</Text>
                    <Text style={styles.txtDescription}>gg.gorigoe</Text>
                    <Text style={styles.txtDescription}>zicooley</Text>
                  </View>
                </View>
              </View>
              <View style={{ height: 2, backgroundColor: 'gray', width: 300, margin: 20 }}></View>
              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
              >
                <Text style={{fontSize:18,fontFamily:'kanitRegular'}}>ปิด</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>


        {/* ============= close Modal ================== */}
        <FlatList
          style={{ width: "100%" }}
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
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center'
    // marginVertical: 8,
  },
  lefContainer: {
    flexDirection: 'row',
  },
  midContainer: {
    justifyContent: 'space-around',
  },
  profile: {
    height: 60,
    width: 60,
    borderRadius: 50,
    borderWidth: 3,
    marginRight: 15,
    borderColor: 'white'
  },
  name: {
    fontSize: 18,
    fontFamily: 'kanitSemiBold',
  },
  txtcaption: {
    fontSize: 16,
    color: 'gray',
    width: 100,
    fontFamily: 'kanitLight',
  },
  time: {
    fontSize: 16,
    color: 'gray'
  },
  txtHeader: {
    fontSize: 20,
    fontFamily: 'kanitRegular'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 20,
    margin: 15,
    backgroundColor: '#E5E5E5',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  addFriend: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },




  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width:350,
    height:550
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  modalImage: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    //alignSelf:'center',
    //borderRadius:50
    borderRadius: 100,
  },
  modalProfile: {
    width: 150,
    height: 150,
    backgroundColor: 'gray',
    borderRadius: 100
  },
  modalMid: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  modalName: {
    fontSize: 24,
    fontFamily: 'kanitSemiBold'
  },
  txtDescription: {
    fontSize: 18,
    fontFamily: 'kanitRegular'
  },
});


export default FriendList;