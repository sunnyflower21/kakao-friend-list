import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Margin from "./Margin";

export default (props) => {
  return (
    <View style={style.container}>
      <Image source={{ uri: props.uri }} style={style.image}></Image>
      <View style={style.detail}>
        <Text style={style.text}>{props.name}</Text>
        <Margin height={6} />
        <Text style={style.introduction}>{props.introduction}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  detail: {
    justifyContent: "center",
    marginLeft: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
  },
  introduction: {
    fontSize: 12,
    color: "grey",
  },
});
