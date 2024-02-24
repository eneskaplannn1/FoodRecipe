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
    width: 75,
    height: 75,
    marginTop: 12,
    borderRadius: 35,
  },

  greetingText: {
    fontSize: 19,
    fontWeight: "400",
  },
});
