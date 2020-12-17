import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Button , useTheme} from "react-native-paper";

export default function Welcome({ navigation }) {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const {colors} = useTheme()

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      width: windowWidth,
    },
    body: {
      height: windowHeight * 0.42,
      backgroundColor: colors.headerBackground,
      borderBottomLeftRadius: 38,
      alignItems: "center",
      justifyContent: "center",
    },
    titleText: {
      fontFamily: "Nunito-Bold",
      fontSize: 24,
      fontWeight: "bold",
      color: "white",
      marginTop: 20,
    },
    footer: {
      flex: 1,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.titleText}>Welcome To Book And Shift</Text>
      </View>
      <View style={styles.footer}>
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: colors.headerBackground,
          }}
        />
        <View
          style={{
            flex: 1,
            borderTopRightRadius: 35,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Nunito-Bold",
          }}
        >
          <Button
            icon="arrow-right-thick"
            mode="outlined"
            contentStyle={{ flexDirection: "row-reverse", paddingLeft: 19 }}
            onPress={() => navigation.navigate("Login")}
            style={{width : 160  }}
            color = '#04446b'
          >
         Get Started
          </Button>
        </View>
      </View>
    </View>
  );
}
