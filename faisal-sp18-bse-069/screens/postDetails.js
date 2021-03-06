import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

  const Post = ({ navigation, route }) => {
  const data = route.params.item;
  const gallery = route.params.gallery;

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{ backgroundColor: "white", flex:1, marginTop:hp('2.5%')}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "white" }}
      >
        <ImageBackground source={data.image} style={styles.image}>
          <Text style={styles.TagLine}>Discover {data.title}</Text>
          <Text style={styles.Placename}>
            Explore the beauty of Murree
          </Text>
          <TouchableOpacity
            onPress={goBack}
            style={{
              position: "absolute",
              left: "5%",
              top: "5%",
              backgroundColor: "#ff6200",
              borderRadius: 40,
              padding: 10,
            }}
          >
            <Icon name="arrow-back-outline" size={20} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              position: "absolute",
              right: "5%",
              top: "5%",
              backgroundColor: "#ff6200",
              borderRadius: 40,
              padding: 10,
            }}
          >
            <Icon name="heart-outline" size={20} color="white" />
          </TouchableOpacity>
        </ImageBackground>

        <Text style={{ padding: 14, fontSize: 20, fontWeight: "bold" }}>
          About the place
        </Text>
        <Text style={styles.detailText}>
        Murree is a mountain resort town, located in the Galyat region of the Pir Panjal Range, within the Rawalpindi District of Punjab, Pakistan. It forms the outskirts of the Islamabad-Rawalpindi metropolitan area, and is about 30 km northeast of Islamabad. It has average altitude of 2,291 metres.
        </Text>
        <Text style={styles.detailText}>
          Construction of the town was started in 1851 on the hill of Murree as a sanatorium for British troops. The permanent town of Murree was constructed in 1853 and the church was consecrated shortly thereafter. One main road was established, commonly referred to even in modern times, as the mall. Murree was the summer headquarters of the colonial Punjab Government until 1876 when it was moved to Shimla.
        </Text>
        <Text style={styles.detailText}>
          Construction of the town was started in 1851 on the hill of Murree as a sanatorium for British troops. The permanent town of Murree was constructed in 1853 and the church was consecrated shortly thereafter. One main road was established, commonly referred to even in modern times, as the mall. Murree was the summer headquarters of the colonial Punjab Government until 1876 when it was moved to Shimla.
        </Text>
        <Text style={styles.detailText}>
          Construction of the town was started in 1851 on the hill of Murree as a sanatorium for British troops. The permanent town of Murree was constructed in 1853 and the church was consecrated shortly thereafter. One main road was established, commonly referred to even in modern times, as the mall. Murree was the summer headquarters of the colonial Punjab Government until 1876 when it was moved to Shimla.
        </Text>
        <Text style={styles.detailText}>
          Construction of the town was started in 1851 on the hill of Murree as a sanatorium for British troops. The permanent town of Murree was constructed in 1853 and the church was consecrated shortly thereafter. One main road was established, commonly referred to even in modern times, as the mall. Murree was the summer headquarters of the colonial Punjab Government until 1876 when it was moved to Shimla.
        </Text>
        <Text style={styles.detailText}>
         Construction of the town was started in 1851 on the hill of Murree as a sanatorium for British troops. The permanent town of Murree was constructed in 1853 and the church was consecrated shortly thereafter. One main road was established, commonly referred to even in modern times, as the mall. Murree was the summer headquarters of the colonial Punjab Government until 1876 when it was moved to Shimla.
        </Text>
        <Text style={styles.detailText}>
         Construction of the town was started in 1851 on the hill of Murree as a sanatorium for British troops. The permanent town of Murree was constructed in 1853 and the church was consecrated shortly thereafter. One main road was established, commonly referred to even in modern times, as the mall. Murree was the summer headquarters of the colonial Punjab Government until 1876 when it was moved to Shimla.
        </Text>

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", padding: 14 }}>
            Suggested tours
          </Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={gallery}
            horizontal={true}
            renderItem={({ item }) => {
              return (
                <View style={{ paddingBottom: 20 }}>
                  <View>
                    <Image
                      source={item.image}
                      style={{
                        width: wp("30%"),
                        height: hp("20%"),
                        marginHorizontal: 10,
                        borderRadius: 10,
                      }}
                    />
                    <Icon
                      name="pin-outline"
                      size={24}
                      color="white"
                      style={styles.imageLocationIcon}
                    />
                    <Text
                      style={{
                        position: "absolute",
                        left: "20%",
                        bottom: "2%",
                        color: "white",
                        fontSize: responsiveScreenFontSize(2),
                      }}
                    >
                      {item.title}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
      <View>

    </View>
    </View>
    

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: responsiveScreenHeight(25),
    justifyContent: "flex-end",
  },
  TagLine: {
    color: "white",
    marginLeft: 20,
    fontWeight: "bold",
    fontSize: responsiveScreenFontSize(2),
    paddingHorizontal: 14,
  },
  Placename: {
    color: "white",
    marginVertical: 10,
    marginBottom: 10,
    marginLeft: 20,
    fontSize: responsiveScreenFontSize(2.5),
    fontWeight: "bold",
    paddingHorizontal: 14,
  },
  // BookTicketBtn: {
  //   backgroundColor: "#ff6200",
  //   position: "absolute",
  //   borderRadius: 40,
  //   top: "20%",
  //   right: 10,
  //   padding: 10,
  // },

  detailText: {
    paddingHorizontal: 14,
    fontSize: responsiveScreenFontSize(1.7),
    fontWeight: "normal",
    opacity: 0.6,
    lineHeight: 25,
  },
  imageLocationIcon: {
    position: "absolute",
    left: "5%",
    bottom: "2%",
  },
});
export default Post;
