import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Buttons = () => {
  return (
    <>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonAlignment}>
          <TouchableOpacity
            style={styles.buttonShare}
            onPress={() => alert("This feature is coming soon!")}
          >
            <Ionicons
              name="md-share"
              style={styles.iconShare}
              size={32}
            ></Ionicons>
          </TouchableOpacity>
          {
            <TouchableOpacity
              style={styles.buttonHeart}
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
      </View>
    </>
  );
};

// Styling Buttons and Alignment

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 20,
  },

  buttonAlignment: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  buttonHeart: {
    width: "20%",
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: "#EEE",
    marginLeft: 10,
  },

  buttonShare: {
    width: "25%",
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: "#EEE",
  },

  iconShare: {
    color: "#000",
  },

  iconHeart: {
    color: "#DC143C",
  },
});

export default Buttons;
