import React from "react";
import { View, Text, Button } from "react-native";

function Home({ navigation }) {
  return (
    <View>
      <Text>Home Page</Text>
      <Button title="Criar" onPress={() => navigation.navigate("Criar")} />
    </View>
  );
}

export default Home;
