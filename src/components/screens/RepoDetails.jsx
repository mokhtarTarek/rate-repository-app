import React from "react";
import { FlatList } from "react-native";
import useRepositories from "../../hooks/useRepositories";
import RepositoryItem from "../components/RepositoryItem";
import { FETCH_SINGLE_REPO } from "../../graphql/queries";
import AppBar from "../components/AppBar";
import ItemSeparator from "../components/ItemSeparator";
import ReviewRepo from "../components/ReviewRepo";

const RepoDetails = ({ route, navigation }) => {
  const { repoId, gitButton } = route.params;
  const variables = {
    id: repoId,
    first: 8,
  };

  const { data, error, loading, fetchMore } = useRepositories(
    FETCH_SINGLE_REPO,
    variables
  );
  if (data) 

  const repositoryReviews = data
    ? data.repository.reviews.edges.map((edge) => edge.node)
    : [];

  const handleFetchMore = () => {
    

    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return (
    <>
      <AppBar navigation={navigation} />
      <RepositoryItem
        item={data ? data.repository : {}}
        gitButton={gitButton}
        gitUrl={data && data.repository.url}
      />
      <ItemSeparator />

      {/* RENDER REVIEWS */}
      <FlatList
        data={repositoryReviews}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <ReviewRepo item={item} />}
        keyExtractor={(item) => item.id}
        onEndReached={handleFetchMore}
        onEndReachedThreshold={0.5}
      />
    </>
  );
};

export default RepoDetails;
