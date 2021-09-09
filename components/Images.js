import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  onPress,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Images = () => {
  return (
    <>
      <View style={styles.item}>
        <View>
          <Image
            style={styles.imageScalling}
            source={{
              uri: "http://img.picturequotes.com/2/549/548695/being-happy-quote-1.jpg",
            }}
          />
        </View>
      </View>
      <View style={styles.buttonAlignment}>
        <TouchableOpacity style={styles.buttonLeft}>
          <Text style={styles.buttonText}>NEXT IMAGE</Text>
        </TouchableOpacity>
        {
          <TouchableOpacity
            style={styles.buttonRight}
            onPress={() => alert("Image has been saved!")}
          >
            <Ionicons
              name="md-heart"
              style={styles.iconHeart}
              size={32}
            ></Ionicons>
          </TouchableOpacity>
        }
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    borderRadius: 10,
    height: 400,
    backgroundColor: "#FFF",
    marginBottom: 30,
  },

  imageScalling: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },

  buttonAlignment: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  buttonLeft: {
    width: "50%",
    backgroundColor: "#333",
    padding: 5,
    borderRadius: 10,
  },

  buttonRight: {
    width: "20%",
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    textAlign: "center",
    justifyContent: "center",
    color: "#FFF",
    padding: 10,
  },

  iconHeart: {
    color: "#DC143C",
  },
});

export default Images;
