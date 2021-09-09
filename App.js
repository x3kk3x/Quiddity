import React from "react";
import { StyleSheet, Text, View, Button, Icon } from "react-native";
import Images from "./components/Images";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      {/* TItle and Image wrapper */}
      <View style={styles.imagesWrapper}>
        <Text style={styles.sectionTitle}>
          Everything not saved will be lost!
        </Text>
        <View style={styles.items}>
          {/* This is where the images will go! */}
          <Images />
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
});
