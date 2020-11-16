import React, { Component } from 'react';
import { View,FlatList,TouchableOpacity,StyleSheet,Text,Alert,Image } from 'react-native';
import { List, ListItem, SearchBar } from "react-native-elements";
class Menu extends Component {

    render(props) {
      return (
        <View style={{flex:1, marginTop: 50}}>
          <this.renderHeader/>
          <FlatList
            data={this.props.todos}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={this.renderSeparator}
        />
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    itemStyle: {
      flexDirection:'row',
      padding: 10,
      marginVertical: 8,
    },title: {
        fontSize: 18,	  
    },
    footer:{
      padding:8,
      backgroundColor:"#e2e6ef",
      justifyContent:"center", 
      alignContent:"center"
    },
    viewStyle:{
      flexDirection:'row',
      backgroundColor: '#F8F8F8',
      alignItems:'center',
      paddingStart:8,
      height:60,
      shadowColor:'#000000',
      shadowOffset:{width:0 ,height:2},
      shadowOpacity:0.2,
      position:'relative'
    },
    textStyle :{
      fontSize : 20
    }
  });
  
  const mapDispatchToProps=(dispatch)=>{
    return{
      add:(model,description)=>dispatch(addCar(model,description))
    }
  }
  const mapStateToProps=(state)=>{
    return{
      todos:state.carReducer.carList
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Menu)