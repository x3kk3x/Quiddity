import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Images = () => {
  return (
    <View>
      <Text>Test</Text>
      <Text>Test</Text>
      <Text>Test</Text>
      <Text>Test</Text>
      <Text>Test</Text>
      <Image
        source={{
          uri: "https://parade.com/wp-content/uploads/2019/10/Life-Quotes-Dolly-680x430.jpg",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // { this needs to be created! }
});

export default Images;
