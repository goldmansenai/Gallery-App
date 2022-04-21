import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import baseUrl from "../utils/api";

function Home({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/all-posts`)
      .then((res) => {
        setData(res.data);
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View>
      <Text>Home Page</Text>
      <Button title="Criar" onPress={() => navigation.navigate("Criar")} />
      <View style={styles.container}>
        <ScrollView>
          {/* TODOS OS POSTS  */}
          <View style={styles.containerCards}>
            {data.map((x) => {
              <View key={x._id} style={styles.conteudo}>
                <View key={x._id} style={styles.card}>
                  <TouchableOpacity
                    onPress={() => {
                      handleDetailPress(x._id);
                    }}
                  >
                    <Image source={{ uri: x.image }} style={styles.img} />
                  </TouchableOpacity>

                  <Text style={styles.txt}>{x.title}</Text>
                </View>
              </View>;
            })}
          </View>
          <StatusBar style="auto" />
        </ScrollView>
      </View>

      {/* <View>
        <TouchableOpacity
          style={styles.add_btn}
          onPress={() => navigation.navigate("Criar")}
        >
          <Text>Add</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e8eaed",
  },
  conteudo: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  add: {
    backgroundColor: "#FFF",
    paddingLeft: 49,
    paddingRight: 49,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 50,
    margin: 60,
  },
  aviso: {
    fontStyle: "normal",
    fontWeight: "100",
    fontSize: 18,
    paddingBottom: 33,
    lineHeight: 29.3,
    textAlign: "center",
    color: "#201E1E",
  },
  img: {
    width: 365,
    height: 157,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: 365,
  },
  txt: {
    padding: 14,
    fontSize: 20,
    flexWrap: "wrap",
    textAlign: "left",
  },
  add_btn: {
    backgroundColor: "#F37676",
    textAlign: "center",
    width: 80,
    height: 80,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  containerCards: {
    marginTop: 30,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e8eaed",
  },
});

export default Home;
