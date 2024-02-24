import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation, useRouter } from "expo-router";

function RecipeCard({ item, index, isLoading }) {
  const isEven = index % 2 == 0;
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.cardContainer,
          {
            paddingLeft: isEven ? 0 : 8,
            paddingRight: isEven ? 8 : 0,
            marginBottom: 4,
          },
        ]}
        onPress={() => router.push(`/recipes/${item.idMeal}`)}
      >
        {isLoading ? null : (
          <>
            <Image
              style={[
                styles.image,
                {
                  height: index % 3 === 0 ? 250 : 350,
                },
              ]}
              source={{ uri: item.strMealThumb }}
            />
            <Text style={styles.text}>
              {item.strMeal.split(" ").slice(0, 2).join(" ")}
            </Text>
          </>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  cardContainer: {
    width: "100%",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    borderRadius: 12,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
  },
});

export default RecipeCard;
