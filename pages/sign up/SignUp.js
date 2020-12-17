import React from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import { Button, useTheme } from "react-native-paper";
import Box from "../../components/box/Box";
import Container from "../../components/container/Container";
import FormInput from "../../components/formInput/FormInput";

export default function SignUp({ navigation }) {
  const [text, setText] = React.useState("");
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    header: {
      flex: 1,
    },
    body: {
      flex: 1,
      borderTopLeftRadius: 65,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Nunito-Bold",
    },
  });

  return (
    <Container>
      <Box titletext="SIGN UP" />

      <View style={styles.header}>
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: colors.headerBackground,
          }}
        />
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.body}>
            <View style={{ flex: 1, marginTop: 50 }}>
              <ScrollView>
                <FormInput
                  labelName="Email"
                  value={text}
                  autoCapitalize="none"
                  placeholder="Enter Email"
                  icon="account-circle"
                />
                <FormInput
                  labelName="Email"
                  value={text}
                  autoCapitalize="none"
                  placeholder="Enter Password"
                  icon="email"
                />
                <FormInput
                  labelName="Email"
                  value={text}
                  autoCapitalize="none"
                  placeholder="Enter Password"
                  icon="lock"
                />
                <FormInput
                  labelName="Email"
                  value={text}
                  autoCapitalize="none"
                  placeholder="Enter Password"
                  icon="lock"
                />

                <Button
                  mode="outlined"
                  onPress={() => navigation.navigate("Home")}
                  style={{ width: 120, marginLeft: 68, marginTop: 10 }}
                  color="#04446b"
                >
                  SIGN UP
                </Button>
                
              </ScrollView>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </Container>
  );
}
