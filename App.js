import Main from "./src/components/screens/Main";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "./src/utils/appoloClient";
import { Provider as PaperProvider } from "react-native-paper";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import AuthStorage from "./src/utils/authStorage";
import AuthStorageContext from "./src/context/AuthStorageContext";
import Par from "./src/utils/par";

const authStorage = new AuthStorage();
// Provided the storage instance for the createApolloClient function as an argument.
// This is because next, we will send the access token to Apollo Server in each request

// we need also to provide the authStorage for the others components using react context
const apolloClient = createApolloClient(authStorage);

const App = () => {
  // Constants manifest contain the app config : look at app.config.js file
  //
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <AuthStorageContext.Provider value={authStorage}>
          <PaperProvider>
            <Main />
            <StatusBar style="auto" />
          </PaperProvider>
        </AuthStorageContext.Provider>
      </ApolloProvider>
    </>
  );
};

export default App;
