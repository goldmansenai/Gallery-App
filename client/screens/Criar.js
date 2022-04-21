import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import axios from "axios";

function Criar({ navigation }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleCreatePress = () => {
    if (title === "" || image === "" || description === "") {
      console.log("Campos nao podem ser nulos");
    } else {
      const data = {
        title: title,
        image: image,
        description: description,
      };
      axios
        .post(
          /*`https://gallery-rn.herokuapp.com/api/v1/posts/create-post`*/ "http://localhost:4000/api/v1/posts/create-post",
          data
        )
        .then(() => navigation.navigate("Home"));
    }
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.conteudo}>
            {/* DIV TÍTULO */}
            <View style={styles.title}>
              <Text style={{ fontSize: 25, marginBottom: 2 }}>Título</Text>
              <TextInput
                placeholder="  Minha Bela Imagem"
                style={styles.inputs}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              ></TextInput>
            </View>

            {/* DIV IMAGEM */}
            <View style={styles.title}>
              <Text style={{ fontSize: 25, marginBottom: 2 }}>Título</Text>
              <TextInput
                placeholder="https://google.com"
                style={styles.inputs}
                onChange={(e) => {
                  setImage(e.target.value);
                }}
              ></TextInput>
            </View>

            {/* DIV DESCRIÇÃO */}
            <View style={styles.desc}>
              <Text style={{ fontSize: 25, marginBottom: 7 }}>Descrição</Text>
              <TextInput
                multiline={true}
                style={styles.inputDesc}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></TextInput>
            </View>

            {/* BOTAÕ ADICIONAR */}
            <TouchableOpacity style={styles.add} onPress={handleCreatePress}>
              <Text style={{ fontSize: 20, color: "#FFF" }}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",

    backgroundColor: "#fff",

    margin: 0,
    padding: 0,
  },
  conteudo: {
    marginTop: 31,
  },
  add: {
    backgroundColor: "#0066FF",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",

    paddingLeft: 49,
    paddingRight: 49,
    paddingTop: 15,
    paddingBottom: 15,

    borderRadius: 50,
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
  inputs: {
    borderWidth: 1,
    borderColor: "#BBBB",

    width: 364,
    height: 40,
    borderRadius: 15,
  },
  inputDesc: {
    borderWidth: 1,
    borderColor: "#BBBB",
    width: 364,
    height: 309,
    borderRadius: 15,
  },
  image: {
    paddingTop: 23,
  },
  selectedImage: {
    display: "flex",
    flexDirection: "row",
  },
  desc: {
    paddingTop: 23,
    paddingBottom: 54,
  },
});

export default Criar;
