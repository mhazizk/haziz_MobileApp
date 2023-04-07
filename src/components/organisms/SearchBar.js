import { View, Text, TextInput, Dimensions } from "react-native";
import React from "react";
import CustomTextInput from "../atoms/CustomTextInput";
import colorsConstants from "../../constants/colorsConstants";
import IonIcons from "react-native-vector-icons/Ionicons";
import IconButton from "../atoms/IconButton";

const SearchBar = ({ value, onChange }) => {
  const width = Dimensions.get("window").width - 32;

  return (
    <View
      style={{
        width: width,
        alignItems: "center",
        marginTop: 16,
        flexDirection: "row",
        paddingHorizontal: 16,
        marginHorizontal: 16,
        backgroundColor: "#ffffff",
        height: 48,
        borderRadius: 16,
        overflow: "hidden",
      }}
    >
      <IonIcons name="search" size={24} color={colorsConstants.primary} />
      <CustomTextInput
        placeholder="Cari menu"
        value={value}
        onChange={(text) => onChange(text)}
        keyboardType="default"
      />
      {value && (
        <View
          style={{
            position: "absolute",
            right: 16,
            zIndex: 2,
          }}
        >
          <IconButton
            name="close"
            color={colorsConstants.danger}
            size={24}
            onPress={() => onChange("")}
          />
        </View>
      )}
    </View>
  );
};

export default SearchBar;
