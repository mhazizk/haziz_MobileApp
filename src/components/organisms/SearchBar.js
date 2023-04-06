import { View, Text, TextInput } from "react-native";
import React from "react";
import CustomTextInput from "../atoms/CustomTextInput";
import colorsConstants from "../../constants/colorsConstants";

const SearchBar = ({ value, onChange }) => {
  return (
    <View
      style={{
        width: "100%",
        alignItems: "flex-start",
        paddingHorizontal: 16,
      }}
    >
      <CustomTextInput
        value={value}
        onChange={(text) => onChange(text)}
        placeholder="Cari menu"
      />
    </View>
  );
};

export default SearchBar;
