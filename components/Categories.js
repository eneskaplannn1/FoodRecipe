import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";

export default function Categories({ categories }) {
  return (
    <View style={{ marginTop: 12 }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.category}
        contentContainerStyle={{ paddingHorizontal: 0, columnGap: 12 }}
      >
        {categories.map((category, i) => {
          return (
            <TouchableOpacity key={i} style={{ rowGap: 4 }}>
              <Image
                style={styles.mealImage}
                source={require("../assets/foods/1.jpg")}
              />
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryText: {
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
  },
  mealImage: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
});
