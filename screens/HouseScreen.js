import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { View,StyleSheet,Text,Button,TouchableOpacity,TextInput,Image,FlatList } from "react-native";
const HouseScreen = () => {
    const [houses,setHouse]= useState([
        {
            image:require('../assets/markus-spiske-37931-unsplash.png'),
            name:'One Mission Bay',
            time:'14 days ago',
            address:'San Francisco, CA',
            price:'$2,950,000',
        },
        {
            image:require('../assets/andrew-neel-1354776-unsplash.png'),
            name:'1410 Steiner St',
            time:'9 days ago',
            address:'San Francisco, CA',
            price:'$3,279,000',
        },
        {
            image:require('../assets/christopher-jolly-616571-unsplash.png'),
            name:'246 Sussex St',
            time:'7 days ago',
            address:'San Francisco, CA',
            price:'$1,259,000',
        },
        {
            image:require('../assets/emile-guillemot-1205579-unsplash.png'),
            name:'1206 Market St',
            time:'2 hours ago',
            address:'San Francisco, CA',
            price:'$379,000',
        },
        {
            image:require('../assets/michael-browning-246513-unsplash.png'),
            name:'463 Eureka St',
            time:'4 days ago',
            address:'San Francisco, CA',
            price:'$3,795,000',
        }]);
  return (
    <View style={styles.container}>
      <View style={{flex:1}}>
        <FlatList
            data={houses}
            renderItem={({item})=>(
                <TouchableOpacity>
                    <View style={styles.houseItems}>
                        <Image source={item.image} style={styles.imageHouses}/>
                        <View style={styles.infoHouseItems}>
                            <Text>{item.name}</Text>
                            <Text>{item.time}</Text>
                            <View style={styles.addressAndPrice}>
                                <Text>{item.address}</Text>
                                <Text>{item.price}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            )}
        />
      </View>
      <View style={styles.bottomBar}>
      <TouchableOpacity // Sử dụng TouchableOpacity thay thế cho Button
          style={styles.button}
          onPress={() => {
            // Handle button press
          }}
        >
          <Image
            source={require("../assets/Home.png")}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // Handle button press
          }}
        >
          <Image
            source={require("../assets/Collections.png")}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // Handle button press
          }}
        >
          <Image
            source={require("../assets/Saved.png")}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // Handle button press
          }}
        >
          <Image
            source={require("../assets/Search.png")}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between'
    },
    title:{
        fontSize:20,
        color:'#4A4A4A',
        fontWeight:'600',
        marginTop:10,
        marginLeft:10,
        marginBottom:0,
    },
    houseItems:{
        width:'100%',
        height:100,
        display:'flex',
        flexDirection:'row',
    },
    imageHouses:{
        height:'100%',
        width: '20%',
        resizeMode:'contain'
    },
    infoHouseItems:{
        flex:1,
        height:'100%',
        justifyContent:'center'
    },
    addressAndPrice:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        paddingRight:10,
    },
    bottomBar: {
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#fff",
        shadowOffset: {
          x: 0,
          y: -10,
        },
        shadowOpacity: 0.5,
        shadowColor: "black",
      },
      button: {
        width: 100,
        height: 50,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
      },
      buttonImage: {
        width: 30,
        height: 30,
        resizeMode:'contain',
      },
});

export default HouseScreen;