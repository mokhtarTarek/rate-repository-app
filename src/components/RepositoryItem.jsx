import React from "react";
import Constants from "expo-constants";

import { Text, View, StyleSheet, Image, Button } from "react-native";
import CustomText from "./CustomText";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: "white",
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.5,
    // shadowRadius: 40,
    // elevation: 3,
  },
  profil: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 7,
  },
  profil__Infos: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 15,
    marginRight: 15,
  },

  profil__avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  stats: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15,
  },
  statsItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  // button: {
  //   color: theme.colors.primary,
  //   padding: 4,
  // },
});

function RepositoryItem({ item }) {
  return (
    <View style={styles.container}>
      <View style={styles.profil}>
        <Image
          style={styles.profil__avatar}
          source={{ uri: item.ownerAvatarUrl }}
        />
        <View style={styles.profil__Infos}>
          <CustomText fontWeight="bold" style={{ marginBottom: 3 }}>
            {item.fullName}
          </CustomText>
          <CustomText style={{ marginBottom: 3 }}>
            {item.description}
          </CustomText>

          <Button title={item.language} color={theme.colors.primary} />
        </View>
      </View>
      <View style={styles.stats}>
        <View style={styles.statsItem}>
          <CustomText fontWeight="bold">
            {(item.stargazersCount / 1000).toFixed(1)}k
          </CustomText>
          <CustomText>Stars</CustomText>
        </View>
        <View style={styles.statsItem}>
          <CustomText fontWeight="bold">
            {" "}
            {(item.forksCount / 1000).toFixed(1)}k{" "}
          </CustomText>
          <CustomText>Forks</CustomText>
        </View>
        <View style={styles.statsItem}>
          <CustomText fontWeight="bold"> {item.reviewCount} </CustomText>
          <CustomText>Reviews</CustomText>
        </View>
        <View style={styles.statsItem}>
          <CustomText fontWeight="bold"> {item.ratingAverage} </CustomText>
          <CustomText>Rating</CustomText>
        </View>
      </View>
    </View>
  );
}

export default RepositoryItem;
