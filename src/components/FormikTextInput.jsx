import { StyleSheet } from "react-native";
import { useField } from "formik";

import TextInput from "./TextInput";
import CustomText from "./CustomText";

const styles = StyleSheet.create({
  errorText: {
    margin:12,
    marginTop: 3,
    color:"red"
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
   // Check if the field is touched and the error message is present
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        style={[{
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          borderRadius: 4,
         
        }, showError && { borderColor:"red"}]}
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
       {/* Show the error message if the value of showError variable is true  */}
      {showError && (
         <CustomText style={styles.errorText}>{meta.error}</CustomText>
      )}
    </>
  );
};

export default FormikTextInput;
