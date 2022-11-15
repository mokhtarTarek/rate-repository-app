import React, { useState, useCallback } from "react";
import { useDebounce } from "use-debounce";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";

import PaperMenu from "../components/PaperMenu";
import AppBar from "../components/AppBar";
import CustomText from "../components/CustomText";
import List from "../components/List";

const RepositoryList = ({ navigation }) => {
  const [orderBy, setOrderBy] = useState({
    text: "Latest Repositories",
    orderBy: "CREATED_AT",
    orderDirection: "DESC",
  });
  const [searchQuery, setSearchQuery] = useState("");
  //delay execution of search
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);

  const handleOrderBy = useCallback((obj) => {
    setOrderBy(obj);
  }, []);

  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <>
      <AppBar navigation={navigation} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <CustomText> {orderBy.text} </CustomText>
        <PaperMenu handleOrderBy={handleOrderBy} />
      </View>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />

      <List
        orderBy={orderBy}
        searchQuery={debouncedSearchQuery}
        navigation={navigation}
      />
    </>
  );
};

export default RepositoryList;
