import { useQuery } from "@apollo/client";

const useRepositories = (QUERY_NAME, variables) => {
  // this will log twice since the state of the iseQuery will changes

  return useQuery(QUERY_NAME, {
    // variables: {
    //   id: id,
    //   orderBy: "RATING_AVERAGE",
    //   orderDirection: "DESC",
    // },
    variables,
    //skip: !id,
    fetchPolicy: "cache-and-network",
  });
};

export default useRepositories;
