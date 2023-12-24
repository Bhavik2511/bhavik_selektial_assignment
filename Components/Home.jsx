import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Data from '../Data'

const Card = ({item}) => {
    return(
<View style={styles.card}>
        <View style={styles.imageWrapper}>
            <Image style={styles.image} source={{uri: item.image}}/>
            <View style={styles.discount}>
            <Text style={styles.discountText}>{item.percentOff}</Text>
            <Text style={styles.distext}>{item.rupeesOff}</Text>
            </View>
            
        </View>
        <View style={styles.infoWrapper}>
            <Text style={styles.restname}>{item.restaurantName}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={require('../Assets/staricon.png')} style={{width:25, height:25, marginRight:5}}/>
                <Text style={{fontSize: 22, fontWeight: 'bold', color:'#171717'}}>{item.rating}k </Text>
                <Text style={{fontSize: 25, fontWeight: 'bold', color:'#171717'}}>.</Text>
                <Text style={{fontSize: 22, fontWeight: 'bold', color:'#171717'}}> {item.deliveryTime}</Text>
            </View>
            <Text style={{fontSize: 16.5}}>{item.cuisines}</Text>
            <Text style={{fontSize: 16.5}}>{item.location} . {item.distance}</Text>
        </View>
      </View>
    )
}

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.topbar}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
        <Image style={styles.arrow} source={require('../Assets/back-arrow.jpg')}/>
        </TouchableOpacity>
      <Text style={styles.headtext}>Restaurants to explore</Text>
      </View>

      <FlatList
    data={Data}
    keyExtractor={(item) => item.distance}
    renderItem={({ item }) => <Card item={item} />}
  />





      


    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        padding: 10,
        height: '100%',
        paddingTop: 10,
        backgroundColor:'white'
    },
    topbar:{
        flexDirection:'row',
        // backgroundColor: 'grey',
        height: 30,
        alignItems: "center",
        marginBottom: 20
    },
    arrow:{
        height: 20,
        width: 30,
    },
    headtext:{
        fontSize: 20,
        fontWeight:'bold',
        marginLeft: 55,
        color: '#171717'
    },

    // card styles
    card:{
        width: '100%',
        // backgroundColor: 'lightgrey',
        // borderWidth: 2,
        flexDirection: 'row',
        marginBottom: 40,
    },
    imageWrapper:{
        // backgroundColor: 'grey',
        width: 150,
        borderRadius: 20,
        marginRight: 10
    },
    image:{
        position:'relative',
        width:150,
        height:180,
        borderRadius: 20,
    },
    discount:{
        position: 'absolute',
        bottom: 10,
        left: 10,

    },
    discountText:{
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold'
    },
    distext:{
        color: 'lightgrey',
        fontWeight: 'bold',
        fontSize: 13
    },

    infoWrapper:{
        // borderColor:'black',
        // borderWidth: 2,
        width: '59%',
        paddingTop: 15
    },
    restname:{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#171717',
    },
})