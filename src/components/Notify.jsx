import { Text, View } from "react-native";
import CustomText from "./CustomText";
const Notify = ({ errorMessage }) => {
  if (!errorMessage) {
    return null;
  }
  return (
    <View>
      <CustomText style={{ color: "red" }}>{String(errorMessage)}</CustomText>
    </View>
  );
};
export default Notify;
