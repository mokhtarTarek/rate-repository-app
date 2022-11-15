//////////// CONNECT TO APPOLO SERVER //////////////////////////////////////

import Constants from "expo-constants";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { relayStylePagination } from "@apollo/client/utilities";

const { appolo_uri } = Constants.manifest.extra;
const httpLink = createHttpLink({
  // Replace the IP address part with your own IP address!
  uri: appolo_uri,
});

const cache = new InMemoryCache({
  typePolicies: {
    //data.repositories
    Query: {
      fields: {
        repositories: relayStylePagination(),
      },
    },
    //data.repository.reviews
    Repository: {
      fields: {
        reviews: relayStylePagination(),
      },
    },
  },
});

const createApolloClient = (authStorage) => {
  // https://www.apollographql.com/docs/react/api/link/apollo-link-context
  // setContext to set new headers variables like authorization...
  const authLink = setContext(async (_, { headers }) => {
    try {
      const accessToken = await authStorage.getAccessToken();
      //
      return {
        headers: {
          ...headers,
          Authorization: accessToken ? `Bearer ${accessToken} ` : "",
        },
      };
    } catch (e) {
      return {
        headers,
      };
    }
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    // cache: new InMemoryCache(),
    cache,
  });

  // return new ApolloClient({
  //   link: httpLink,
  //   cache: new InMemoryCache(),
  // });
};

export default createApolloClient;
