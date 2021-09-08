import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Images from "./components/Images";

export default function App() {
  return (
    <View style={styles.container}>
      {/* TItle and Image wrapper */}
      <View style={styles.imagesWrapper}>
        <Text style={styles.sectionTitle}>In the eye of the beholder!</Text>
        <View style={styles.items}>
          {/* This is where the images will go! */}
          <Images />
          <Text />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },

  imagesWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    paddingBottom: 30,
  },

  items: {},
});
