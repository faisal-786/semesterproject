import React, { useState } from 'react';
import { Card, ListItem, Button } from 'react-native-elements'
import {StyleSheet, Text, View, Image, ImageBackground, ScrollView, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/Ionicons";
import Post from '../screens/postDetails';
import Example from '../screens/example';
const CardComponent = (props) => {

    var day = new Date().getDate(); 
    var month = new Date().getMonth() + 1; 
    var year = new Date().getFullYear();

    const [gallery, setgallery] = useState([
        {
          image: {
            uri:
              "https://www.google.com/url?sa=i&url=http%3A%2F%2Ftravelguideideas.com%2Fbeautiful-night-view-of-murree-pakistan%2F&psig=AOvVaw0gRRgPYS__fjGStbSg_MpC&ust=1619870677618000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLi-x-P2pfACFQAAAAAdAAAAABAV",
          },
          title: "Swat",
          key: "1",
        },
        {
          image: {
            uri:
              "https://www.google.com/url?sa=i&url=https%3A%2F%2Farchive.pakistantoday.com.pk%2F2020%2F08%2F12%2Ftourism-resumes-in-kp%2F&psig=AOvVaw3z3VFpCDEFXc6nDOgjAzPJ&ust=1619893694820000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLj3qbXMpvACFQAAAAAdAAAAABAJ",
          },
          title: "Abottabad",
          key: "2",
        },
        {
          image: {
            uri:
              "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FArifeen786%2F&psig=AOvVaw3z3VFpCDEFXc6nDOgjAzPJ&ust=1619893694820000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLj3qbXMpvACFQAAAAAdAAAAABAP",
          },
          title: "KASHMIR",
          key: "3",
        },
        {
          image: {
            uri:
              "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F518828819571276167%2F&psig=AOvVaw3z3VFpCDEFXc6nDOgjAzPJ&ust=1619893694820000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLj3qbXMpvACFQAAAAAdAAAAABAU",
          },
          title: "Naran",
          key: "4",
        },
      ]);
   
    return (
        <FlatList
        showsHorizontalScrollIndicator={false}
        data={gallery}
        renderItem={({item}) =>{
            return(
            <View style={styles.container}>
                <ScrollView>
                <TouchableOpacity
                   onPress={() => props.navigation.navigate('Post', { item }) }
                  >
                <View style={{elevation:10}}>
                <ImageBackground 
                    source={item.image}
                    style={styles.contain}
                    imageStyle={{borderRadius:25}}
                >
                    <View style={{flexDirection:'row', alignSelf:"flex-start", backgroundColor:'gray' , borderRadius:20, marginTop:170, marginLeft:15, alignItems:'center'}}>
                    <Icon name='menu-outline' size={14} color='orange' style={{marginLeft:5}} />
                    <Text style={{marginHorizontal:5}}>{item.title}</Text>
                    </View>
    
                    <View style={{flexDirection:'row', alignSelf:"flex-start", backgroundColor:'gray' , borderRadius:20, marginTop:170, marginLeft:10, alignItems:'center'}}>
                    <Icon name='eye-outline' size={14} color='orange' style={{marginLeft:5}} />
                    <Text style={{marginHorizontal:5}}>1509</Text>
                    </View>
    
                    <View style={{flexDirection:'row', alignSelf:"flex-start", backgroundColor:'gray' , borderRadius:20, marginTop:170, marginLeft:10, alignItems:'center'}}>
                    <Text style={{marginHorizontal:5}}>{day +"-"+ month+ "-" + year}</Text>
                    </View>
    
                </ImageBackground>
                </View>
                </TouchableOpacity>
               </ScrollView>
               </View>
            );
        }}
        />
    );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      marginBottom:10
      
    },
    contain: {
        marginTop:10, 
        marginHorizontal:10,
        height:200, 
        flexDirection:'row', 
        justifyContent:'space-between',
        elevation:10
    }

  });

export default CardComponent;