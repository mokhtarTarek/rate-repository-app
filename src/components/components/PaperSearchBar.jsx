import React, { useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
const PaperSearchBar = ({ hanldeTextFilter }) => {
  return (
    <Searchbar
      placeholder="Search"
      //on text change do somthing
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default React.memo(PaperSearchBar);
