import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";

export default function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:4000/api/v1/posts/all-posts").then((res) => {
      setData(res.data);
      console.log(data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <View>
        {/* {data.map((x) => {
          <View key={x._id}>
            <Text>{x.title}</Text>
            <Text>{x.image.data}</Text>
          </View>;
        })} */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
