import useSignIn from "../hooks/useSignIn";
import AppBar from "./AppBar";
import LoginForm from "./LoginForm";

const SignIn = ({ navigation }) => {
  // destruct signIn function
  const [signIn, result] = useSignIn();
  console.log(result);
  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const data = await signIn({ username, password });
      if (data) {
        navigation.navigate("Repo");
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <AppBar navigation={navigation} />
      <LoginForm onSubmit={onSubmit} errorMsg={result.error} />
    </>
  );
};

export default SignIn;
