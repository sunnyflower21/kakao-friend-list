import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Margin from "./Margin";

export default (props) => {
  return (
    <View style={style.container}>
      <View style={style.innerContainer}>
        <Image source={{ uri: props.uri }} style={style.image}></Image>
        <View style={style.detail}>
          <Text style={style.text}>{props.name}</Text>
          <Margin height={6} />
          <Text style={style.introduction}>{props.introduction}</Text>
        </View>
      </View>
      {props.music ? (
        <View style={style.musicConatainer}>
          <Text style={style.musicTitle}>{props.music}</Text>
        </View>
      ) : undefined}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  innerContainer: {
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
  musicConatainer: {
    justifyContent: "center",
  },
  musicTitle: {
    fontSize: 10,
    color: "gray",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#a3c585",
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
});
