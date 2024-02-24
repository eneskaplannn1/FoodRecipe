import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import MasonryList from "@react-native-seoul/masonry-list";
import RecipeCard from "./RecipeCard";

const filteredItems = [
  {
    source: "1.jpg",
    name: "kebab",
    id: Math.random(),
  },
  {
    source: "2.jpg",
    name: "pancake",
    id: Math.random(),
  },
  {
    source: "1.jpg",
    name: "kebab",
    id: Math.random(),
  },
  {
    source: "2.jpg",
    name: "pancake",
    id: Math.random(),
  },
  {
    source: "1.jpg",
    name: "kebab",
    id: Math.random(),
  },
  {
    source: "2.jpg",
    name: "pancake",
    id: Math.random(),
  },
  {
    source: "1.jpg",
    name: "kebab",
    id: Math.random(),
  },
  {
    source: "2.jpg",
    name: "pancake",
    id: Math.random(),
  },
  {
    source: "1.jpg",
    name: "kebab",
    id: Math.random(),
  },
  {
    source: "2.jpg",
    name: "pancake",
    id: Math.random(),
  },
  {
    source: "1.jpg",
    name: "kebab",
    id: Math.random(),
  },
  {
    source: "2.jpg",
    name: "pancake",
    id: Math.random(),
  },
];

export default function Recipes() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Recipes</Text>
      <MasonryList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, i }) => <RecipeCard item={item} index={i} />}
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
