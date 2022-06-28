// use React.createContext() to provide the AuthStorageContext for other components
// component can consume the context using the useContext hook
import React from "react";
const AuthStorageContext = React.createContext();
export default AuthStorageContext;
