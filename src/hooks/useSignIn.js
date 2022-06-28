import { useContext } from "react";
import { useApolloClient, useMutation } from "@apollo/client";
import { LOGIN } from "../graphql/mutations";
import AuthStorageContext from "../context/AuthStorageContext";

const useSignIn = () => {
  const apolloClient = useApolloClient();
  const authStorage = useContext(AuthStorageContext);
  const [authenticate, result] = useMutation(LOGIN);

  const signIn = async ({ username, password }) => {
    const { data } = await authenticate({
      variables: { username, password },
    });
    await authStorage.setAccessToken(data.authenticate.accessToken);
    apolloClient.resetStore();
    return data;
  };
  //console.log(result);
  /*
   * The return value of the hook should be a tuple [signIn, result]
   * where result is the mutations result as it is returned by the useMutation hook
   * and signIn a function that runs the mutation with a { username, password }
   * object arguments
   */

  return [signIn, result];
};

export default useSignIn;
