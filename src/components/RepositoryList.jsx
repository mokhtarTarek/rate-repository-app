import React, { useEffect } from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import AppBar from "./AppBar";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
//import { data } from "../data";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;
const RepositoryList = ({ navigation }) => {
  const { data, error, loading } = useRepositories();
  // const { data, error, loading } = useQuery(GET_REPOSITORIES, {
  //   fetchPolicy: "cache-and-network",
  // });

  const repositoryNodes = data
    ? data.repositories.edges.map((edge) => edge.node)
    : [];

  console.log("RepoList render");
  return (
    <>
      {loading ? (
        <Text>loading...</Text>
      ) : error ? (
        <Text>{error.message}</Text>
      ) : (
        <>
          <AppBar navigation={navigation} />
          <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => <RepositoryItem item={item} />}
            keyExtractor={(item) => item.id}
          />
        </>
      )}
    </>
  );
};

export default RepositoryList;
