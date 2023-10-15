import React,{useState} from 'react'
import { FlatList, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import { Text, View } from 'react-native'

const Categories = () => {
    const [categories] = useState([
        {
            title:'Houses',
            image:require('../assets/housecategoriesimage.jpg'),
        },
        {
            title:'Apartments',
            image:require('../assets/apartmentcategoriesimgae.jpg'),
        },
        {
            title:'Condos',
            image:require('../assets/condoscategoriesimage.jpg'),
        },
        {
            title:'Land',
            image:require('../assets/federico-respini-sYffw0LNr7s-unsplash.jpg'),
        },
        {
            title:'Buildings',
            image:require('../assets/shutterstock_728342668.jpg'),
        },
        {
            title:'Town Houses',
            image:require('../assets/wilton-place.jpg'),
        },
    ])
    return (
        <View style={{flex:1}}>
            <FlatList
            data={categories}
            renderItem={({item})=>{return(
                <TouchableOpacity style={styles.buttonCategory}>
                    <ImageBackground style={styles.backgroundItem} source={item.image}>
                        <Text style={styles.title}>{item.title}</Text>
                    </ImageBackground>
                </TouchableOpacity>
            )}}
            />
        </View>
    )
}
export default Categories;

const styles = StyleSheet.create({
    buttonCategory:{
        height:85,
        width:'90%',
        alignSelf:'center',
        marginBottom:20,
    },
    backgroundItem:{
        opacity:'0.8',
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        justifyContent:'center',
        alignItems:'center',
        padding:0,
    },
    title:{
        color:'#fff',
        fontSize:30,
        fontWeight:'600'
    },
});
