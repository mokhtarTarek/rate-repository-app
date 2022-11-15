import React from "react";
import { Formik } from "formik";
import { View, Button, Pressable, StyleSheet, Text } from "react-native";

import FormikTextInput from "../components/FormikTextInput";
import { useMutation } from "@apollo/client";
import * as yup from "yup";
import theme from "../../theme";
import { CREATE_REVIEW } from "../../graphql/mutations";
import AppBar from "../components/AppBar";
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
const ReviewForm = ({ navigation }) => {
  const [error, setError] = React.useState("");
  const [createReview] = useMutation(CREATE_REVIEW, { errorPolicy: "all" });

  const initialsValues = {
    repositoryOwnerName: "",
    repositoryName: "",
    rating: "",
    review: "",
  };
  const handleCreateReview = async (values) => {
    const review = {
      repositoryName: values.repositoryOwnerName,
      ownerName: values.repositoryName,
      rating: Number(values.rating),
      text: values.review,
    };
    //
    // const review = {
    //   repositoryName: "redux",
    //   ownerName: "reduxjs",
    //   rating: 70,
    //   text: "good library",
    // };

    const { data, errors } = await createReview({
      variables: { review },
    });

    // if (errors) thisError = errors[0].message;
    if (errors) {
      setError(errors[0].message);
    }

    navigation.navigate("RepoDetails", {
      repoId: data.createReview.repositoryId,
      //item: item,
      gitButton: true,
    });
    //
  };

  const validationSchema = yup.object().shape({
    repositoryOwnerName: yup
      .string()
      .required("Repository owner name is required"),
    repositoryName: yup.string().required("Repository name is required"),
    rating: yup
      .number()
      .required("Rating is required")
      .min(0, "rating must be between 0 and 100")
      .max(100, "rating must be between 0 and 100"),
    review: yup.string(),
  });

  return (
    <>
      <AppBar navigation={navigation} />
      <Formik
        initialValues={initialsValues}
        onSubmit={handleCreateReview}
        validationSchema={validationSchema}
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
            <FormikTextInput
              name="repositoryOwnerName"
              placeholder="Repository owner name"
            ></FormikTextInput>
            <FormikTextInput
              name="repositoryName"
              placeholder="Repository name"
            ></FormikTextInput>
            <FormikTextInput
              name="rating"
              placeholder="Rating"
            ></FormikTextInput>
            <FormikTextInput
              name="review"
              placeholder="Review"
              multiple
            ></FormikTextInput>
            <Pressable style={styles.button} onPress={handleSubmit}>
              <Text style={styles.text}>create review</Text>
            </Pressable>
            <Notify errorMessage={error} />
          </View>
        )}
      </Formik>
    </>
  );
};

export default ReviewForm;
