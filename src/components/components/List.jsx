import React from "react";

import { FlatList, View, StyleSheet, Text } from "react-native";
import ItemSeparator from "./ItemSeparator";
import RepositoryItem from "./RepositoryItem";

import useRepositories from "../../hooks/useRepositories";
import { GET_REPOSITORIES } from "../../graphql/queries";

const List = ({ orderBy, searchQuery, navigation }) => {
  // consider passing variables as params
  const variables = {
    orderBy: orderBy.orderBy,
    orderDirection: orderBy.orderDirection,
    searchKeyword: searchQuery,
    first: 8,
  };
  const { data, error, loading, fetchMore } = useRepositories(
    GET_REPOSITORIES,
    variables
  );

  const repositoryNodes = data
    ? data.repositories.edges.map((edge) => edge.node)
    : [];

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return (
    <>
      {loading ? (
        <Text>loading...</Text>
      ) : error ? (
        <Text>{error.message}</Text>
      ) : (
        <FlatList
          data={repositoryNodes}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={({ item }) => (
            //item is a single element of the data array
            <RepositoryItem
              item={item}
              navigation={navigation}
              gitButton={false}
            />
          )}
          keyExtractor={(item) => item.id}
          onEndReached={handleFetchMore}
          onEndReachedThreshold={0.5}
        />
      )}
    </>
  );
};

export default List;
