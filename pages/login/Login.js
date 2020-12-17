import React from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import { Formik } from "formik";
import { Button, useTheme } from "react-native-paper";
import Box from "../../components/box/Box";
import Container from "../../components/container/Container";
import FormInput from "../../components/formInput/FormInput";

export default function Login({ navigation }) {
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
      <Box titletext="LOGIN" />

      <View style={styles.header}>
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: colors.headerBackground,
          }}
        />
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.body}>
            <View style={{ flex: 1, marginTop: 90 }}>
              <ScrollView>
                <Formik
                  initialValues={{ email: "", password: "" }}
                  validationSchema={reviewSchema}
                  onSubmit={(values, actions) => {
                    actions.resetForm();
                    console.log(values);
                  }}
                >
                  {(props) => (
                    <View>
                      <FormInput
                        labelName="Email"
                        onChangeText={props.handleChange('email')}
                        value={props.values.email}
                        autoCapitalize="none"
                        placeholder="Enter Email"
                        icon="email"
                      />
                      <FormInput
                        labelName="Password"
                        onChangeText={props.handleChange('password')}
                        value={props.values.password}
                        autoCapitalize="none"
                        placeholder="Enter Password"
                        icon="lock"
                      />

                      <Button
                        mode="outlined"
                        onPress={() => navigation.navigate("Home")}
                        style={{ width: 120, marginLeft: 66, marginTop: 10 }}
                        color="#04446b"
                      >
                        Login
                      </Button>
                      <Button
                        mode="text"
                        style={{ width: 260, marginTop: 10 }}
                        onPress={() => navigation.navigate("SignUp")}
                        color="#04446b"
                        uppercase="false"
                        labelStyle={{ fontSize: 12 }}
                      >
                        Don't have Account ?
                      </Button>
                    </View>
                  )}
                </Formik>
              </ScrollView>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </Container>
  );
}
