import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button, Menu, Divider, Provider } from "react-native-paper";
const filterText = [
  "Latest repositories",
  "Highest rated repositories",
  "Lowest rated repositories",
];
const PaperMenu = ({ handleOrderBy }) => {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 40,
        padding: 5,
      }}
    >
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Button onPress={openMenu}>...</Button>}
      >
        <Menu.Item
          onPress={() => {
            handleOrderBy({
              text: filterText[0],
              orderBy: "CREATED_AT",
              orderDirection: "DESC",
            });
            closeMenu();
          }}
          title={filterText[0]}
        />
        <Menu.Item
          onPress={() => {
            handleOrderBy({
              text: filterText[1],
              orderBy: "RATING_AVERAGE",
              orderDirection: "DESC",
            });
            closeMenu();
          }}
          title={filterText[1]}
        />
        <Menu.Item
          onPress={() => {
            handleOrderBy({
              text: filterText[2],
              orderBy: "RATING_AVERAGE",
              orderDirection: "ASC",
            });
            closeMenu();
          }}
          title={filterText[2]}
        />
      </Menu>
    </View>
  );
};

export default React.memo(PaperMenu);
