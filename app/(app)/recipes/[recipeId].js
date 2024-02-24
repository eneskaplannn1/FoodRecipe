import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import YoutubeIframe from "react-native-youtube-iframe";

import Icon from "react-native-vector-icons/FontAwesome";

export default function RecipeDetail() {
  const router = useRouter();
  const { recipeId } = useLocalSearchParams();
  const [meal, setMeal] = useState([]);

  const fetchRecipe = async () => {
    try {
      const res = await fetch(
        `https://themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
      );
      const data = await res.json();
      return data.meals[0];
    } catch (err) {
      console.error("Error occured: " + err);
      throw new Error(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const mealData = await fetchRecipe();
      setMeal(mealData);
    };

    fetchData();
  }, []);

  const ingredientIndexes = (meal) => {
    if (!meal) return [];
    const indexes = [];

    for (let i = 0; i < 20; i++) {
      if (meal["strIngredient" + i]) {
        indexes.push(i);
      }
    }
    return indexes;
  };

  function extractVideoId(url) {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url?.match(regex);
    if (match) {
      return match[1];
    } else {
      return "Geçerli bir YouTube URL'si girin";
    }
  }

  return (
    <ScrollView style={{ padding: 8, rowGap: 24 }}>
      <SafeAreaView>
        <View>
          <Image
            resizeMode="cover"
            style={{
              width: "100%",
              height: 400,
              borderRadius: 25,
              alignSelf: "flex-start",
              objectFit: "cover",
            }}
            source={{ uri: meal?.strMealThumb }}
          />
        </View>

        <View
          style={{
            position: "absolute",
            width: "100%",
            top: 32,
            left: 8,
          }}
        >
          <TouchableOpacity onPress={() => router.back()}>
            <Icon name="chevron-circle-left" size={50} />
          </TouchableOpacity>
        </View>

        <View style={{ paddingHorizontal: 8 }}>
          <View style={{ marginVertical: 8 }}>
            <Text style={{ fontSize: 28, fontWeight: 600 }}>
              Name of the food
            </Text>
            <Text style={{ fontSize: 18, color: "#666", fontWeight: "400" }}>
              Turkish
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 28, fontWeight: 600, marginBottom: 8 }}>
              Ingredients
            </Text>
            <View style={{ rowGap: 8 }}>
              {ingredientIndexes(meal).map((i) => {
                return (
                  <View key={i} style={{ flexDirection: "row", columnGap: 12 }}>
                    <View
                      style={{
                        backgroundColor: "#ff9e20",
                        width: 18,
                        height: 18,
                        borderRadius: 25,
                      }}
                    ></View>
                    <Text style={{ fontWeight: 800 }}>
                      {meal["strMeasure" + i]}
                    </Text>
                    <Text>{meal["strIngredient" + i]}</Text>
                  </View>
                );
              })}
            </View>
          </View>
          <View style={{ rowGap: 12, marginTop: 18 }}>
            <Text style={{ fontSize: 28, fontWeight: 600, marginBottom: 8 }}>
              Instructions
            </Text>
            <Text>{meal.strInstructions}</Text>
          </View>
          <View style={{ marginBottom: 24 }}>
            <Text style={{ fontSize: 28, fontWeight: 600, marginBottom: 8 }}>
              Recipe Video
            </Text>
            <View style={{ borderRadius: 24 }}>
              <YoutubeIframe
                height={200}
                videoId={extractVideoId(meal?.strYoutube)}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
