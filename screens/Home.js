import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, StyleSheet, Text, Button, SafeAreaView, TouchableOpacity, TextInput, Image, FlatList, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
houseCategoriesImgae = require('../assets/housecategoriesimage.jpg');
apartmentCategoriesImage = require('../assets/apartmentcategoriesimgae.jpg');
condosCategoriesImage = require('../assets/condoscategoriesimage.jpg');

const Home = () => {
  const navigation = useNavigation();
  function goToHouseScreen(title) {
    if (title == "Houses")
      navigation.navigate("HouseScreen");
    if (title == "Apartments")
      navigation.navigate("ApartmentScreen");
  }
  const [categories, setCategories] = useState([
    {
      image: houseCategoriesImgae,
      title: "Houses",
    },
    {
      image: apartmentCategoriesImage,
      title: "Apartments",
    },
    {
      image: condosCategoriesImage,
      title: "Condos",
    },
  ]);
  const [houses, setHouse] = useState([
    {
      id: '1',
      image: require('../assets/markus-spiske-37931-unsplash.png'),
      name: 'One Mission Bay',
      time: '14 days ago',
      address: 'San Francisco, CA',
      price: '$2,950,000',
      isliked: false,
    },
    {
      id: '2',
      image: require('../assets/andrew-neel-1354776-unsplash.png'),
      name: '1410 Steiner St',
      time: '9 days ago',
      address: 'San Francisco, CA',
      price: '$3,279,000',
      isliked: false,
    },
    {
      id: '3',
      image: require('../assets/christopher-jolly-616571-unsplash.png'),
      name: '246 Sussex St',
      time: '7 days ago',
      address: 'San Francisco, CA',
      price: '$1,259,000',
      isliked: false,
    },
    {
      id: '4',
      image: require('../assets/emile-guillemot-1205579-unsplash.png'),
      name: '1206 Market St',
      time: '2 hours ago',
      address: 'San Francisco, CA',
      price: '$379,000',
      isliked: false,
    },
    {
      id: '5',
      image: require('../assets/michael-browning-246513-unsplash.png'),
      name: '463 Eureka St',
      time: '4 days ago',
      address: 'San Francisco, CA',
      price: '$3,795,000',
      isliked: false,
    }]);
  const handleLike = (id) => {
    const updateHouse = houses.map((house) => {
      if (house.id == id) {
        house.isliked = !house.isliked;
      }
      return house;
    })
    setHouse(updateHouse);
  };
  return (
    <View style={styles.mainContainer}>
      <View>
      <Text style={styles.title}>Categories</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => goToHouseScreen(item.title)}>
            <View style={styles.categoryItem}>
              <Image source={item.image} style={styles.categoryImage} />
              <Text style={styles.categoryTitle}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      </View>
      <View style={styles.subContainer}>
      <Text style={styles.title}>Houses</Text>
      <FlatList
        style={styles.houseList}
        data={houses}
        numColumns={2}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.houseItem}>
            <View style={styles.houseItem}>
              <Image source={item.image} style={styles.imageHouse} />
              <Text style={styles.nameStyle}>{item.name}</Text>
              <TouchableOpacity onPress={() => handleLike(item.id)} style={styles.heartIcon}><Icon name="heart" size={30} color={item.isliked ? "green" : "white"} /></TouchableOpacity>
              <Text style={styles.addressStyle}>{item.address}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.buttonShowAll}>
        <Text style={{fontSize:17,color:'#20C065'}}>Show all (7)</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: '#4A4A4A',
    fontWeight: '600',
    marginTop: 10,
    marginLeft: 30,
    marginBottom: 5,
    alignSelf: 'flex-start'
  },
  categoryItem: {
    width: 140,
    height: 100,
    borderRadius: 10,
    margin: 10,
    borderColor: '#E4E2E2',
    borderWidth: '1px'
  },
  categoryImage: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  categoryTitle: {
    textAlign: "center",
    fontSize: 16,
    color: '#4A4A4A',
    fontWeight: "bold",
    marginTop: 13,
  },
  houseList: {
    marginLeft: 10,
    marginRight: 10,
  },
  houseItem: {
    width: 190,
    height: 220
  },
  imageHouse: {
    resizeMode: 'contain',
    width: '100%',
    height: '75%',
  },
  nameStyle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4A4A4A',
    paddingLeft: 5,
  },
  addressStyle: {
    fontSize: 13,
    fontWeight: '300',
    paddingLeft: 5,
  },
  heartIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  buttonShowAll: {
    width:'90%',
    alignSelf:'center',
    height:60,
    borderColor:'#20C065',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderRadius:8,
  }
});

export default Home;