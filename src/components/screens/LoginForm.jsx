import React from "react";
import * as yup from "yup";
import { View, Button, Pressable, StyleSheet, Text } from "react-native";
import { Form, Formik, useField } from "formik";
import FormikTextInput from "../components/FormikTextInput";
import theme from "../../theme";
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
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

function LoginForm({ onSubmit, errorMsg }) {
  const initialValues = {
    username: "",
    password: "",
  };

  // const onSubmit = (values) => {
  //
  //
  //   submit(values);
  // };
  const validationSchema = yup.object().shape({
    username: yup.string().required("username is required"),
    password: yup.string().required("password is required"),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit} //defaults params are values inputs
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        // <View>
        //   <TextInput
        //     onChangeText={handleChange("email")}
        //     onBlur={handleBlur("email")}
        //     value={values.email}
        //   />
        //   <Button onPress={handleSubmit} title="Submit" />
        // </View>
        <View>
          <FormikTextInput name="username" placeholder="Username" />
          <FormikTextInput
            name="password"
            placeholder="Password"
            secureTextEntry
          />
          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.text}>Login</Text>
          </Pressable>
          <Notify errorMessage={errorMsg} />
        </View>
      )}
    </Formik>
  );
}

export default LoginForm;
