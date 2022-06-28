import Main from "./src/components/Main";
import { Button, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}
/////////////// NAVIGATE TO THE SAME ROUTE MULTIPLE TIME
///Each time you call push we add a new route to the navigation stack.
// When you call navigate it first tries to find an existing route with that name,
// and only pushes a new route if there isn't yet one on the stack.

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>

      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("Details")}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
};

export default App;
