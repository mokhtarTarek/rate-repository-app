import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const getrepos = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

  //const fetchRepositories = async () => {
  //setLoading(true);

  //  // THE FECTH IS A JS BUILT-IN METHOD
  //const response = await fetch('http://192.168.2.248:5000/api/repositories');
  // Axios handle the serialization and parsing but fetch does not do that for us
  // response.json() -> convert the json response into a JS object despite the name .json()
  //const json = await response.json();

  //setLoading(false);
  //setRepositories(json);
  //};

  // useEffect(() => {
  //   fetchRepositories();
  // }, []);

  // const repositoryNodes = data
  //   ? data.repositories.edges.map((edge) => edge.node)
  //   : [];
  return getrepos;
};

export default useRepositories;
