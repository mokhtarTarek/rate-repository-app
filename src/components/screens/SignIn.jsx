import useSignIn from "../../hooks/useSignIn";
import AppBar from "../components/AppBar";
import LoginForm from "./LoginForm";

const SignIn = ({ navigation }) => {
  // destruct signIn function
  const [signIn, result] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const data = await signIn({ username, password });
      if (data) {
        navigation.navigate("RepoList");
      }
    } catch (e) {}
  };

  return (
    <>
      <AppBar navigation={navigation} />
      <LoginForm onSubmit={onSubmit} errorMsg={result && result.error} />
    </>
  );
};

export default SignIn;
