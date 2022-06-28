import Main from "./src/components/Main";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "./src/utils/appoloClient";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import AuthStorage from "./src/utils/authStorage";
import AuthStorageContext from "./src/context/AuthStorageContext";

const authStorage = new AuthStorage();
// Provided the storage instance for the createApolloClient function as an argument.
// This is because next, we will send the access token to Apollo Server in each request

// we need also to provide the authStorage for the others components using react context
const apolloClient = createApolloClient(authStorage);

const App = () => {
  // Constants manifest contain the app config : look at app.config.js file
  console.log(Constants.manifest);
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <AuthStorageContext.Provider value={authStorage}>
          <Main />
          <StatusBar style="auto" />
        </AuthStorageContext.Provider>
      </ApolloProvider>
    </>
  );
};

export default App;
