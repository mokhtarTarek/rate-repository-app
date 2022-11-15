import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import { useMutation } from "@apollo/client/react";
import moment from "moment";
import CustomText from "./CustomText";
import theme from "../../theme";
import Button from "./Button";
import { DELETE_REVIEW } from "../../graphql/mutations";

///////////////////////////////////////////////////////////////////////////////
function ReviewRepo({ navigation, item, showActions }) {
  const [deleteReview, result] = useMutation(DELETE_REVIEW);
  const title = item.repository ? item.repository.fullName : item.user.username;

  const createTwoButtonAlert = () => {
    //
    // Alert.alert("Alert Title", "My Alert Msg", [
    //   {
    //     text: "Cancel",
    //     onPress: () =>
    //     style: "cancel",
    //   },
    //   {
    //     text: "OK",
    //     onPress: () =>
    //       deleteReview({
    //         variables: {
    //           deleteReviewId: item.id,
    //         },
    //       }),
    //   },
    // ]);
  };
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.review__rating}>
          <CustomText> {item.rating} </CustomText>
        </View>
        <View style={styles.review__details}>
          <View>
            <CustomText fontWeight="bold">{title}</CustomText>
          </View>
          <View>
            <CustomText fontWeight="bold" style={{ color: "grey" }}>
              {moment(item.createdAt).format("DD.MM.YYYY")}
            </CustomText>
          </View>
          <View>
            <CustomText> {item.text} </CustomText>
          </View>
        </View>
      </View>
      <View
        style={[styles.container, { display: `${showActions ? "" : "none"} ` }]}
      >
        <Button
          text="View Repository"
          onPress={() => {
            navigation.navigate("RepoDetails", {
              repoId: item.repositoryId,
              //item: item,
              gitButton: true,
            });
          }}
        />
        <Button
          text="Delete review"
          type="danger"
          onPress={createTwoButtonAlert}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    padding: 8,
    backgroundColor: "white",
    margin: 8,
  },
  review__rating: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderColor: theme.colors.primary,
    borderWidth: 3,
    borderRadius: 25,
  },
  review__details: {
    flexShrink: 1,
    padding: 5,
  },
});
export default ReviewRepo;
