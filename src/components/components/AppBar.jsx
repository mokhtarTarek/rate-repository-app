import { View, StyleSheet, Pressable, ScrollView } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";
import { useApolloClient, useQuery } from "@apollo/client";
import { ME } from "../../graphql/queries";
import AuthStorageContext from "../../context/AuthStorageContext";
import { useContext } from "react";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#24292e",
    height: 80,

    // ...
  },
  items: {
    display: "flex",
    // the main axis is from top to buttom by default
    // so justify the content wil be vertically
    justifyContent: "center",
  },
  // ...
});

const AppBar = ({ navigation }) => {
  const apolloClient = useApolloClient();
  const authStorage = useContext(AuthStorageContext);

  const clearToken = async () => {
    await authStorage.removeAccessToken();
    // reexecute all active query

    apolloClient.resetStore();

    navigation.navigate("Home");
  };

  const result = useQuery(ME);
  //
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Pressable
          onPress={() => navigation.navigate("RepoList")}
          style={styles.items}
        >
          <AppBarTab text={"Repositories"} />
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("CreateReview")}
          style={[
            styles.items,
            { display: `${result.data && result.data.me ? "" : "none"} ` },
          ]}
        >
          <AppBarTab text={"Create review"} />
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("MyReviews")}
          style={[
            styles.items,
            { display: `${result.data && result.data.me ? "" : "none"} ` },
          ]}
        >
          <AppBarTab text={"My reviews"} />
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("SignIn")}
          style={[
            styles.items,
            { display: `${result.data && result.data.me ? "none" : ""} ` },
          ]}
        >
          <AppBarTab text={"Sign in"} />
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("SignUp")}
          style={[
            styles.items,
            { display: `${result.data && result.data.me ? "none" : ""} ` },
          ]}
        >
          <AppBarTab text={"Sign up"} />
        </Pressable>

        <Pressable
          onPress={clearToken}
          style={[
            styles.items,
            { display: `${result.data && result.data.me ? "" : "none"} ` },
          ]}
        >
          <AppBarTab text={"Sign out"} />
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("Home")}
          style={styles.items}
        >
          <AppBarTab text={"Home"} />
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default AppBar;
