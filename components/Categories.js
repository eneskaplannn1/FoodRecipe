import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";

export default function Categories({ setCategory }) {
  const [data, setData] = useState([]);
  const getCategories = async () => {
    try {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const result = await res.json();
      return result.categories;
    } catch (error) {
      console.error("Error fetching categories:", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const categoriesData = await getCategories();
      setData(categoriesData);
    };

    fetchData();
  }, []);

  return (
    <View style={{ marginTop: 12 }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.category}
        contentContainerStyle={{ paddingHorizontal: 0, columnGap: 12 }}
      >
        {data.map((item, i) => {
          return (
            <TouchableOpacity
              key={i}
              style={{ rowGap: 4 }}
              onPress={() => setCategory(item.strCategory)}
            >
              <Image
                style={styles.mealImage}
                source={{ uri: item.strCategoryThumb }}
              />
              <Text style={styles.categoryText}>{item.strCategory}</Text>
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
