import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "grey",
    fontSize: 14,
  },
  blueText: {
    color: "blue",
  },
  bigText: {
    fontSize: 24,
    fontWeight: "700",
  },
});

const FancyText = ({ isBlue, isBig, children }) => {
  const textStyles = [
    styles.text,
    isBlue && styles.blueText, // if isBlue then add styles.blueText from styles
    isBig && styles.bigText, // if isBig the add styles.bigText from styles
  ];
  // Core component accept style property wich can be an array of objects
  return <Text style={textStyles}>{children}</Text>;
};

const Main = () => {
  return (
    <>
      <FancyText>Simple text</FancyText>
      <FancyText isBlue>Blue text</FancyText>
      <FancyText isBig>Big text</FancyText>
      <FancyText isBig isBlue>
        Big blue text
      </FancyText>
    </>
  );
};
