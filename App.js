import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Images from "./components/Images";
import Buttons from "./components/Buttons";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1515549832467-8783363e19b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80",
        }}
        style={styles.image}
      >
        <View style={styles.imagesWrapper}>
          <Text style={styles.sectionTitle}>
            Everything not saved will be lost!
          </Text>
          <View style={styles.items}>
            <Images />
          </View>
        </View>
        <Buttons />
      </ImageBackground>
    </View>
  );
}

// Styling Title and Alignment

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },

  imagesWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    width: "90%",
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#333",
    paddingBottom: 15,
    lineHeight: 30,
  },

  items: {
    position: "relative",
    justifyContent: "center",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
