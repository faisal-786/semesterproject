import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet, 
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
  ActivityIndicator ,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Post from './postDetails.js';
import Example from './example.js';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,

} from "react-native-responsive-dimensions";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image, withBadge } from 'react-native-elements';
import { SafeAreaView } from "react-native-safe-area-context";

const Home = ({ navigation }) => {
  const image = {
    uri:
      "https://dailytimes.com.pk/assets/uploads/2019/12/shimla-christ-church-Murree-Never-Forgot-Alyan-Khan-blogger-1280x720.jpg",
  };

  const recentImage = {
    uri:
      "https://upload.wikimedia.org/wikipedia/commons/d/da/GPO_Mall_Road_Murree%2C_Night_View.jpg",
  };
  const murree =
    "murree a wonderful hill station for summer";

  const [gallery, setgallery] = useState([
    {
      image: {
        uri:
          "https://fcache1.pakwheels.com/original/4X/5/1/7/51746dbf67da6eaa9a3e64576744b32c0fd8982c.jpg",
      },
      title: "Gora Gali",
      key: "1",
    },
    {
      image: {
        uri:
          "https://www.google.com/url?sa=i&url=http%3A%2F%2Ftravelguideideas.com%2Fbeautiful-night-view-of-murree-pakistan%2F&psig=AOvVaw0gRRgPYS__fjGStbSg_MpC&ust=1619870677618000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLi-x-P2pfACFQAAAAAdAAAAABAV",
      },
      title: "hunza",
      key: "2",
    },
    {
      image: {
        uri:
          "https://www.natureadventureclub.pk/blog/wp-content/uploads/2019/07/murree15-960x500.jpg",
      },
      title: "mushkpuri",
      key: "3",
    },
    {
      image: {
        uri:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpropakistani.pk%2F2018%2F07%2F20%2F20-breathtaking-pictures-of-murree-that-prove-it-is-still-the-best%2F&psig=AOvVaw25pCCtXCoVYT72ejQG3uDf&ust=1619870506150000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMDboc_4pfACFQAAAAAdAAAAABAP",
      },
      title: "kashmir",
      key: "4",
    },
  ]);
  const [counter, setCounter] = useState(1);

  const BadgedIcon = withBadge(counter)(Icon)
  return (
    <SafeAreaView>
    <View style={{flexGrow:1}}>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: hp("2.5%"), fontWeight: "bold" }}>
            Top Tours
          </Text>
        </View>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={gallery}
            horizontal={true}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    paddingVertical: hp("1%"),
                    paddingHorizontal: wp("0.5%"),
                  }}
                >
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Post", { item, gallery } )}
                    style={{
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 20,
                      },
                      shadowOpacity: 0.34,
                      shadowRadius: 6.27,

                      elevation: 10,
                    }}
                  >
                        <Image
                          source={item.image}
                          image={item.image}
                          PlaceholderContent={<ActivityIndicator size="small" color="#0000ff" />}
                          
                          style={{
                            width: responsiveScreenWidth(40),
                            marginRight: wp("2%"),
                            height: responsiveScreenHeight(20),
                            borderRadius: 10,
                          }}
                        />

                    <Icon
                      name="pin-outline"
                      size={hp("2.5%")}
                      color="#fff"
                      style={styles.imageLocationIcon}
                    />
                    <Text style={styles.imageText}>{item.title}</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        <View style={{ marginBottom: hp("5%"), }}>
          <View
            style={{
              padding: hp("2%"),
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: hp("2.5%"), fontWeight: "bold" }}>
              Recently Viewed
            </Text>
           <TouchableOpacity onPress={() => navigation.navigate('Example')}>
           <Text
              style={{
                fontSize: hp("2%"),
                fontWeight: "bold",
                color: "#ff6200",
              }}
            >
              View All
            </Text>
           </TouchableOpacity>
          </View>
      
         <Image
            source={recentImage}
            style={{
              width: "95%",
              height: hp("30%"),
              borderRadius: 10,
              marginLeft: wp('2%')
             
            }}
          />     

          <View style={{ position: "absolute", bottom: 0, padding: hp("1%") }}>
            <View style={{ flexDirection: "row" }}>
              <Icon
                name="location-outline"
                size={20}
                color="#ff6200"
                style={{ marginLeft: 10, position: "relative", top: 4 }}
              />
              <Text
                style={{
                  fontSize: 22,
                  color: "white",
                  fontWeight: "normal",
                  marginBottom: "2%",
                  marginHorizontal: 10,
                }}
              >
                Murree
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: "white",
                fontWeight: "normal",
                marginBottom: 10,
                opacity: 0.9,
                marginLeft: 10,
              }}
            >
              {murree}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  

  imageLocationIcon: {
    position: "absolute",
    left: hp("1%"),
    bottom: hp("1%"),
  },
  imageText: {
    position: "absolute",
    bottom: "2%",
    left: "20%",
    fontSize: hp("2.5%"),
    color: "white",
  },
});

export default Home;
