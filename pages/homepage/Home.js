import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Dimensions , TouchableWithoutFeedback, Keyboard } from "react-native";
import Slider from "../../components/slider/slider";
import { TextInput } from "react-native-paper";
const { width, height } = Dimensions.get("screen");

export default function Home({ navigation }) {
  const [text, setText] = useState("");
  return (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        numberOfLines={1}
        left={<TextInput.Icon style={{ borderRightWidth: 1 }} name="heart" />}
      />
      <TextInput
        style={styles.input}
        numberOfLines={1}
        left={<TextInput.Icon style={{ borderRadius : 0, borderRightWidth: 1 }} name="account-circle" />}
      />
      <TextInput
        style={styles.input}
        numberOfLines={1}
        left={<TextInput.Icon style={{ borderRightWidth: 1, borderRadius : 0, marginRight : 15, width: 50 , height : "160%" }} name="heart" />}
      />
      <Text>Home Page</Text>

      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Welcome")}
      />
      <Slider />
    </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
    marginRight : 10, 
    width: width / 1.4,
    height: height / 14,
    backgroundColor: "white",
    borderTopLeftRadius : 20 ,
    borderTopRightRadius : 20 ,
    borderBottomLeftRadius : 20 ,
    borderBottomRightRadius : 20 ,
    overflow : 'hidden'
  },
});
