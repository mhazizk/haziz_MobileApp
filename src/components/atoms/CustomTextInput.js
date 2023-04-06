import { View, Text, TextInput } from "react-native";
import React from "react";

/**
 *
 * @param keyboardType
 * @returns
 */
const CustomTextInput = ({
  keyboardType = "default",
  backgroundColor,
  defaultValue,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <>
      <View
        style={{
          width: "100%",
          backgroundColor: backgroundColor || "white",
          alignItems: "center",
        }}
      >
        <TextInput
          style={{
            width: "100%",
            height: 36,
            textAlign: keyboardType === "numeric" ? "right" : "left",
            paddingHorizontal: 8,
            fontWeight: keyboardType === "numeric" ? "bold" : "normal",
          }}
          placeholder={placeholder}
          keyboardType={keyboardType}
          defaultValue={defaultValue}
          value={value}
          onChangeText={(text) =>
            onChange(
              keyboardType === "numeric" ? parseInt(text) : text.toLowerCase()
            )
          }
        />
      </View>
    </>
  );
};

export default CustomTextInput;
