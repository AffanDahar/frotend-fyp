import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Button, useTheme } from "react-native-paper";

export default function Box({titletext}) {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    body: {
      height: windowHeight * 0.30,
      backgroundColor: colors.headerBackground,
      borderBottomRightRadius: 65,
      alignItems: "center",
      justifyContent: "center",
    },
    titleText: {
      fontFamily: "Nunito-Bold",
      fontSize: 26,
      fontWeight: "bold",
      color: "white",
      marginTop: 10,
      marginLeft : -30,
    },
  });
  return (
    <View style={styles.body}>
      <Text style={styles.titleText}>{titletext}</Text>
    </View>
  );
}
