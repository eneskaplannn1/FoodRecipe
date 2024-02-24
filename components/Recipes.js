import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import MasonryList from "@react-native-seoul/masonry-list";
import RecipeCard from "./RecipeCard";

export default function Recipes({ category }) {
  const [recipe, setRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const getRecipesByCategory = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      const result = await res.json();

      return result.meals;
    } catch (error) {
      console.error("Error fetching categories:", error);
      return [];
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const recipeData = await getRecipesByCategory();
      setRecipe(recipeData);
      setIsLoading(false);
    };

    fetchData();
  }, [category]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Recipes</Text>
      <MasonryList
        data={recipe}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, i }) => (
          <RecipeCard item={item} index={i} isLoading={isLoading} />
        )}
        // refreshing={isLoadingNext}
        // onRefresh={() => refetch({ first: ITEM_CNT })}
        onEndReachedThreshold={0.1}
        refreshing={false}
        // onEndReached={() => loadNext(ITEM_CNT)}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  text: {
    fontSize: 32,
    fontWeight: "700",
    paddingBottom: 8,
  },
});
