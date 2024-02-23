import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const categories = ["Pizza", "Deser", "Salads", "Beef", "Chicken", "Lamb"];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image
            style={styles.roundedImage}
            source={require("../../assets/person.jpg")}
          />
        </View>
        <Text>Icon</Text>
      </View>

      <View style={{ marginTop: 32 }}>
        <Text style={{ fontSize: 19, fontWeight: "400" }}>Hello Enes</Text>
        <Text style={{ fontSize: 32, fontWeight: "400", color: "#334155" }}>
          Make your own food!
        </Text>
        <Text style={{ fontSize: 32, fontWeight: "400", color: "#334155" }}>
          Stay at
          <Text style={{ fontSize: 32, fontWeight: "600", color: "#facc15" }}>
            {" "}
            home
          </Text>
        </Text>
      </View>

      <View style={styles.searchForm}>
        <TextInput style={styles.input} />
        <TouchableOpacity>
          <Text></Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.category}>
        {categories.map((category, i) => {
          <TouchableOpacity key={i}>
            <Image
              style={styles.mealImage}
              source={require("../../assets/categories/meal.jpg")}
            />
            <Text>isim</Text>
          </TouchableOpacity>;
        })}
      </ScrollView>

      <View>
        <Text>show the recipe images</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  category: {
    flexDirection: "row",
  },
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
  input: {
    padding: 8,
    backgroundColor: "#f3f4f6",
    color: "#334155",
    borderRadius: 12,
    fontSize: 18,
  },
  searchForm: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  mealImage: {
    width: 100,
    height: 100,
    borderRadius: 25,
  },
});
