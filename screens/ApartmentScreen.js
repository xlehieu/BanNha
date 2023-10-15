import { View,Text,StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React,{useState} from "react";

const ApartmentScreen = ()=>{
    return(
        <View>
            <Text style={styles.title}>Apartments</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize:20,
        color:'#4A4A4A',
        fontWeight:'600',
        marginTop:10,
        marginLeft:10,
        marginBottom:0,
    },
  categoryItem: {
    width: 130,
    height: 120,
    borderRadius: 10,
    margin: 10,
    borderColor:'#E4E2E2',
    borderWidth:'1px'
  },
  categoryImage: {
    width: "100%",
    height: "50%",
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
  },
  categoryTitle: {
    textAlign: "center",
    fontSize: 16,
    color:'#4A4A4A',
    fontWeight: "bold",
    marginTop:13,
  },
});

export default ApartmentScreen;