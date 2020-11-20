import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Image, TouchableOpacity, Modal
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import firestore from './firebase/Firestore'
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }
  onSignOutSuccess=()=>{
    console.log('Sign Out Success');
  }
  unsuccess=(error)=>{
    console.log(error)
  }
  onLogout=()=>{
    firestore.signOut(this.onSignOutSuccess,this.onReject);
  }
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
  render(props) {
    const { navigation } = this.props;
    const { modalVisible } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: "#E5E5E5" }}>

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
              <TouchableOpacity>
                <View style={styles.profile}>
                  <Image style={styles.image} source={{ uri: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/106120566_3049250375195115_1160308528193104189_o.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFfLRFY8nsWPzaRCcMLitqYCLpinoXybFQIumKehfJsVP2YpNPfwK62kJ6zo5ChZO3UhLo3G1QN7X602rBhM-Fk&_nc_ohc=dYI0SFIF-0QAX_kTRXm&_nc_ht=scontent.fbkk11-1.fna&oh=8bc5e46e29c8296473275a62356c2aa2&oe=5FD824A1' }} />
                </View>
              </TouchableOpacity>
              <View style={{ height: 2, backgroundColor: 'gray', width: 300, margin: 20 }}></View>
              <View style={styles.modalMid}>
                <View style={styles.modalMidLeft}>
                  <Feather name="user" size={24} color="black" />
                </View>
                <View style={styles.modalMidRight}>
                  <TextInput style={styles.textInput} value="Itthikorn wisetpong"></TextInput>
                </View>
              </View>

              <View style={styles.modalMid}>
                <View style={styles.modalMidLeft}>
                  <MaterialIcons name="description" size={28} color="black" />
                </View>
                <View style={styles.modalMidRight}>
                  <TextInput style={styles.textInput} value="โต๊ะ 18"></TextInput>
                </View>
              </View>

              <View style={styles.modalMid}>
                <View style={styles.modalMidLeft}>
                  <AntDesign name="facebook-square" size={24} color="black" />
                </View>
                <View style={styles.modalMidRight}>
                  <TextInput style={styles.textInput} value="Itthikorn wisetpong"></TextInput>
                </View>
              </View>

              <View style={styles.modalMid}>
                <View style={styles.modalMidLeft}>
                  <AntDesign name="instagram" size={24} color="black" />
                </View>
                <View style={styles.modalMidRight}>
                  <TextInput style={styles.textInput} value="gg.gorigoe"></TextInput>
                </View>
              </View>

              <View style={styles.modalMid}>
                <View style={styles.modalMidLeft}>
                  <FontAwesome5 name="line" size={24} color="black" />
                </View>
                <View style={styles.modalMidRight}>
                  <TextInput style={styles.textInput} value="zicooley"></TextInput>
                </View>
              </View>
              <View style={{ height: 2, backgroundColor: 'gray', width:300, margin: 20 }}></View>

              <View style={styles.modalFooter}>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <TouchableOpacity
                    onPress={() => {
                      this.setModalVisible(!modalVisible);
                    }}
                  >
                    <Text style={{fontSize:18,fontFamily:'kanitRegular'}}>ยกเลิก</Text>
                  </TouchableOpacity>
                </View>
                
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <TouchableOpacity
                    onPress={() => {
                      this.setModalVisible(!modalVisible);
                    }}
                  >
                    <Text style={{fontSize:18,fontFamily:'kanitRegular',color:'#6F0CEE'}}>ยืนยัน</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>

        {/*================ close modal ==================*/}

        <View style={styles.header}>
          <View style={styles.profile}>
            <Image style={styles.image} source={{ uri: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/106120566_3049250375195115_1160308528193104189_o.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFfLRFY8nsWPzaRCcMLitqYCLpinoXybFQIumKehfJsVP2YpNPfwK62kJ6zo5ChZO3UhLo3G1QN7X602rBhM-Fk&_nc_ohc=dYI0SFIF-0QAX_kTRXm&_nc_ht=scontent.fbkk11-1.fna&oh=8bc5e46e29c8296473275a62356c2aa2&oe=5FD824A1' }} />
          </View>
        </View>
        <View style={styles.mid}>
          <Text style={styles.name}>Itthikorn wisetpong</Text>
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <View style={{ width: '40%', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'flex-end', paddingRight: 10 }}>
              <MaterialIcons name="description" size={28} color="black" />
              <AntDesign name="facebook-square" size={24} color="black" />
              <AntDesign name="instagram" size={24} color="black" />
              <FontAwesome5 name="line" size={24} color="black" />
            </View>
            <View style={{ width: '60%', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'flex-start' }}>
              <Text style={styles.txtDescription}>โต๊ะ 18</Text>
              <Text style={styles.txtDescription}>Itthikorn wisetpong</Text>
              <Text style={styles.txtDescription}>gg.gorigoe</Text>
              <Text style={styles.txtDescription}>zicooley</Text>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
        <TouchableOpacity onPress={() => { this.setModalVisible(true); }}>
          <View style={styles.editProfile}>
            <AntDesign name="setting" size={24} color="black" />
            <Text style={{ fontSize: 16, fontFamily: 'kanitLight' }}> ตั้งค่าโปรไฟล์</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.onLogout}>
          <View style={styles.logOut}>
            <Ionicons name="ios-log-out" size={24} color="white" />
            <Text style={{ fontSize: 16, color: 'white', fontFamily: 'kanitLight' }}> ออกจากระบบ</Text>
          </View>
        </TouchableOpacity>
        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
  mid: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  profile: {
    width: 150,
    height: 150,
    backgroundColor: 'gray',
    borderRadius: 100
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    //alignSelf:'center',
    //borderRadius:50
    borderRadius: 100,
  },
  name: {
    fontSize: 24,
    fontFamily: 'kanitSemiBold'
  },
  txtDescription: {
    fontSize: 18,
    fontFamily: 'kanitRegular'
  },
  editProfile: {
    backgroundColor: 'white',
    borderRadius: 7,
    borderColor: 'black',
    height: 35,
    padding: 5,
    borderWidth: 1,
    flexDirection: 'row',
    marginTop: 5
  },
  logOut: {
    backgroundColor: 'black',
    borderRadius: 7,
    borderColor: 'white',
    height: 35,
    padding: 5,
    borderWidth: 1,
    flexDirection: 'row',
    marginTop: 5
  },



  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  modalView: {
    margin: 10,
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
    height:570
  },
  modalMid:{
    flexDirection:'row'
  },
  modalMidLeft:{
    width:"10%",
    justifyContent:'center'
  },
  modalMidRight:{
    width:"90%",
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E5E5E5',
    margin:5
  },
  textInput:{
    flex: 1,
    fontSize: 16,
    fontFamily: 'kanitLight',
    textAlign: 'center'
  },
  modalFooter:{
    flexDirection:'row',
    justifyContent:'space-evenly'
  }

});


export default Profile;