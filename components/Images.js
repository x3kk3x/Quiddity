import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

const Images = () => {
  return (
    <>
      <View style={styles.imageContainer}>
        <View>
          <TouchableOpacity>
            <Image
              style={styles.imageScalling}
              source={{
                uri: "http://img.picturequotes.com/2/549/548695/being-happy-quote-1.jpg",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    padding: 5,
    height: 400,
    backgroundColor: "transparent",
    marginBottom: 5,
  },

  imageScalling: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    borderWidth: 4,
    borderColor: "#EEE",
    borderRadius: 20,
    borderBottomRightRadius: 1,
  },
});

export default Images;
