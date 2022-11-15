import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import theme from "../../theme";
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: theme.colors.primary,
    margin: 12,
  },

  backgroundColor__Primary: {
    backgroundColor: theme.colors.primary,
  },
  backgroundColor__Danger: {
    backgroundColor: theme.colors.danger,
  },

  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
const Button = ({ text, type, style, ...props }) => {
  // other props like onPress and style must be distructured
  const ButtonStyles = [
    styles.button,
    //type === "primary" && styles.backgroundColor__Primary,
    type === "danger" && styles.backgroundColor__Danger,
  ];

  return (
    <Pressable style={ButtonStyles} {...props}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default Button;
