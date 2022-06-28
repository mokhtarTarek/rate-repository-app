//////////// CONNECT TO APPOLO SERVER //////////////////////////////////////

import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import Constants from "expo-constants";
import { setContext } from "@apollo/client/link/context";

const { appolo_uri } = Constants.manifest.extra;
const httpLink = createHttpLink({
  // Replace the IP address part with your own IP address!
  uri: appolo_uri,
});

const createApolloClient = (authStorage) => {
  // https://www.apollographql.com/docs/react/api/link/apollo-link-context
  const authLink = setContext(async (_, { headers }) => {
    try {
      const accessToken = await authStorage.getAccessToken();
      //console.log(accessToken);
      return {
        headers: {
          ...headers,
          Authorization: accessToken ? `Bearer ${accessToken} ` : "",
        },
      };
    } catch (e) {
      console.log(e);
      return {
        headers,
      };
    }
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  // return new ApolloClient({
  //   link: httpLink,
  //   cache: new InMemoryCache(),
  // });
};

export default createApolloClient;
