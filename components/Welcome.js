import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Welcome() {
  return (
    <View>
      <View style={{ marginTop: 32 }}>
        <Text style={styles.greetingText}>Hello Enes</Text>
        <Text style={styles.mainText}>Make your own food!</Text>
        <Text style={styles.mainText}>
          Stay at
          <Text style={styles.emphasizedText}> home</Text>
        </Text>
      </View>

      <View style={styles.searchForm}>
        <TextInput style={styles.input} />
        <View
          style={{ backgroundColor: "#ccc", padding: 12, borderRadius: 25 }}
        >
          <Icon name="search" size={25} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchForm: {
    marginTop: 16,
    backgroundColor: "#f3f4f6",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 25,
    padding: 4,
  },
  input: {
    flex: 1,
    color: "#334155",
    fontSize: 18,
  },

  greetingText: {
    fontSize: 19,
    fontWeight: "400",
  },
  mainText: {
    fontSize: 32,
    fontWeight: "400",
    color: "#334155",
  },
  emphasizedText: {
    fontSize: 32,
    fontWeight: "600",
    color: "#facc15",
  },
});
