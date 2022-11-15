import React from "react";
import { View } from "react-native";

import CustomText from "./CustomText";

const AppBarTab = ({ text }) => {
  return (
    <View>
      <CustomText
        fontWeight="bold"
        style={{ color: "white" }}
        fontSize="subheading"
      >
        {" "}
        {text}{" "}
      </CustomText>
    </View>
  );
};

export default AppBarTab;
