import React from "react";
import * as yup from "yup";

import { Formik } from "formik";
import FormikTextInput from "../components/FormikTextInput";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useMutation } from "@apollo/client";
import { USER_SIGNIN } from "../../graphql/mutations";
import theme from "../../theme";
import AppBar from "../components/AppBar";
import useSignIn from "../../hooks/useSignIn";
import Notify from "../components/Notify";

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: theme.colors.primary,
    margin: 12,
  },
  // text: {
  //   fontSize: 16,
  //   lineHeight: 21,
  //   fontWeight: "bold",
  //   letterSpacing: 0.25,
  //   color: "white",
  // },
});
const SignupForm = ({ navigation }) => {
  const [error, setError] = React.useState("");
  const [createUser] = useMutation(USER_SIGNIN, { errorPolicy: "all" });
  const [signIn, result] = useSignIn();

  const initValues = {
    username: "",
    password: "",
    passwordConfirmation: "",
  };

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required("username is required")
      .min(1)
      .max(30, "username should not excced 30 chars"),
    password: yup
      .string()
      .required("Password is required")
      .min(5, "password should have 5 chars as minimum length")
      .max(50, "password maximum lenght is 50 chars"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password")], "password don't match")
      .required("Password confirmation is required"),
  });
  const handleCreateNewUser = async (values) => {
    // useMutation
    const { username, password } = values;

    const user = {
      username: values.username,
      password: values.password,
    };
    const { data, errors } = await createUser({
      variables: { user },
    });
    if (errors) setError(errors[0].message);
    try {
      const data = await signIn({ username, password });
      if (data) {
        navigation.navigate("RepoList");
      }
    } catch (e) {}
  };

  return (
    <>
      <AppBar navigation={navigation} />

      <Formik
        initialValues={initValues}
        onSubmit={handleCreateNewUser}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <FormikTextInput
              name="username"
              placeholder="User name"
            ></FormikTextInput>
            <FormikTextInput
              name="password"
              placeholder="Password"
              secureTextEntry
            ></FormikTextInput>
            <FormikTextInput
              name="passwordConfirmation"
              secureTextEntry
              placeholder="Password confirmation"
            ></FormikTextInput>
            <Pressable style={styles.button} onPress={handleSubmit}>
              <Text style={styles.text}>Sign up</Text>
            </Pressable>
            <Notify errorMessage={error} />
          </View>
        )}
      </Formik>
    </>
  );
};

export default SignupForm;
