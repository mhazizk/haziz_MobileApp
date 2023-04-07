import { View, Text, TextInput } from "react-native";
import React from "react";
import addNumberDelimiterOnlyAndStringify from "../../utils/addNumberDelimiterOnlyAndStringify";
import removeDelimiterAndDestringify from "../../utils/removeDelimiterAndDestringify";
import removeDelimiterAndStringify from "../../utils/removeDelimiterAndStringify";

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
  isEnabled = true,
}) => {
  let convertedValue = value;
  const isValueString = typeof value === "string";
  const isValueNumber = typeof value === "number";

  switch (true) {
    case keyboardType === "numeric" && isValueNumber:
      convertedValue = addNumberDelimiterOnlyAndStringify(value);
      break;
    case keyboardType === "numeric" && isValueString:
      convertedValue = addNumberDelimiterOnlyAndStringify(parseInt(value));
      break;
    default:
      break;
  }

  const inputTextOnChange = (text) => {
    switch (true) {
      case keyboardType === "numeric" && isValueNumber:
        if (text === "" || text < 1) {
          return onChange(0);
        }
        return onChange(removeDelimiterAndDestringify(text));
      case keyboardType === "numeric" && isValueString:
        if (text === "" || text < 1) {
          return onChange("0");
        }
        const removedDelimiter = removeDelimiterAndStringify(text);
        onChange(removedDelimiter);
        break;
      case "default":
        onChange(text);
        break;
      default:
        onChange(text);
        break;
    }
  };

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
          editable={isEnabled}
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
          numberOfLines={1}
          value={convertedValue}
          onChangeText={(text) => inputTextOnChange(text)}
        />
      </View>
    </>
  );
};

export default CustomTextInput;
