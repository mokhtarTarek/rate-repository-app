import React from "react";
//expo-linking provides utilities for your app to interact with other installed apps
//using deep links.
import * as Linking from "expo-linking";

import { View, StyleSheet, Image, Button, Pressable } from "react-native";
import CustomText from "./CustomText";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: "white",
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
});

function RepositoryItem({ item, navigation, gitButton, gitUrl }) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() =>
          navigation &&
          navigation.navigate("RepoDetails", {
            repoId: item.id,
            //item: item,
            gitButton: true,
          })
        }
      >
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
        <View style={{ display: `${gitButton ? "" : "none"}` }}>
          <Button
            title={"Open In Github"}
            color={theme.colors.primary}
            onPress={() => Linking.openURL(gitUrl)}
          />
        </View>
      </Pressable>
    </View>
  );
}

export default RepositoryItem;
