import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function MainHeader() {
  return (
    <View style={styles.header}>
      <View>
        <Image
          style={styles.roundedImage}
          source={require("../assets/person.jpg")}
        />
      </View>
      <Text style={styles.greetingText}>Icon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  roundedImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  greetingText: {
    fontSize: 19,
    fontWeight: "400",
  },
});
