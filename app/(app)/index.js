import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Recipes from "../../components/Recipes";
import Welcome from "../../components/Welcome";
import Categories from "../../components/Categories";
import MainHeader from "../../components/MainHeader";

export default function Home() {
  const categories = ["Pizza", "Deser", "Salads", "Beef", "Chicken", "Lamb"];
  return (
    <SafeAreaView style={styles.container}>
      <MainHeader />
      <Welcome />
      <Categories categories={categories} />
      <Recipes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
});
