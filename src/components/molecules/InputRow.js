import { View, Text } from "react-native";
import React from "react";
import CustomTextInput from "../atoms/CustomTextInput";

const InputRow = ({
  isEnabled = true,
  rowName,
  placeholder,
  keyboardType = "default",
  value,
  onChange,
}) => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 8,
          alignItems: "center",
          marginVertical: 4,
        }}
      >
        <Text style={{ fontWeight: "bold", flex: 2 }}>{rowName}</Text>
        <Text style={{ fontWeight: "bold" }}>:</Text>
        <View
          style={{
            flex: 3,
            borderRadius: 8,
            overflow: "hidden",
            marginLeft: 8,
          }}
        >
          <CustomTextInput
            isEnabled={isEnabled}
            backgroundColor="#F4F4F4"
            placeholder={placeholder}
            defaultValue={keyboardType === "numeric" ? "0" : ""}
            value={value}
            onChange={(text) => onChange(text)}
            keyboardType={keyboardType || "default"}
          />
        </View>
      </View>
    </>
  );
};

export default InputRow;
