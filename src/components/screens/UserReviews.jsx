import React from "react";

import { FlatList } from "react-native";
import ReviewRepo from "../components/ReviewRepo";
import ItemSeparator from "../components/ItemSeparator";
import useRepositories from "../../hooks/useRepositories";
import { ME } from "../../graphql/queries";
import AppBar from "../components/AppBar";
const UserReviews = ({ navigation }) => {
  const variables = {
    includeReviews: true,
  };
  const { data, error, loading, fetchMore } = useRepositories(ME, variables);
  if (data) 
  const userReviews = data
    ? data.me.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <>
      <AppBar navigation={navigation} />

      <FlatList
        data={userReviews}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => (
          <ReviewRepo navigation={navigation} showActions item={item} />
        )}
        keyExtractor={(item) => item.id}
        //onEndReached={handleFetchMore}
        //onEndReachedThreshold={0.5}
      />
    </>
  );
};

export default UserReviews;
