import Constants from "expo-constants";
import { Text, StyleSheet, View, Button } from "react-native";
import AppBar from "../components/AppBar";
import RepositoryList from "../screens/RepositoryList";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./SignIn";
import RepoDetails from "./RepoDetails";
import ReviewForm from "./ReviewForm";
import SignupForm from "./SignupForm";
import UserReviews from "./UserReviews";

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    //marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "#e1e4e8",
  },
});

function HomeScreen({ navigation }) {
  return (
    <>
      <AppBar navigation={navigation} />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    </>
  );
}

//THE NAVIGATION CONTAINER IS A PLACE-HOLDER FOR SCREENS
const Main = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          {/* <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="RepoList" component={RepositoryList} />
          <Stack.Screen name="RepoDetails" component={RepoDetails} />
          <Stack.Screen name="CreateReview" component={ReviewForm} />
          <Stack.Screen name="SignUp" component={SignupForm} />
          <Stack.Screen name="MyReviews" component={UserReviews} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Main;
