import { useRouter } from "expo-router";
import { View, Text, Pressable, Image, TouchableOpacity } from "react-native";

function RecipeCard({ item, index }) {
  const isEven = index % 2 == 0;
  const router = useRouter();

  return (
    <View>
      <TouchableOpacity
        style={{
          width: "100%",
          paddingLeft: isEven ? 0 : 8,
          paddingRight: isEven ? 8 : 0,
          justifyContent: "center",
          marginBottom: 4,
        }}
        onPress={() => router.push("/recipes/23")}
      >
        <Image
          style={{
            width: "100%",
            height: index % 3 === 0 ? 250 : 350,
            borderRadius: 12,
          }}
          source={require(`../assets/foods/1.jpg`)}
        />
        <Text style={{ textAlign: "center", fontSize: 20 }}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
}
export default RecipeCard;
