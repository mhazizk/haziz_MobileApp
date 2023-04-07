import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import colorsConstants from "../../constants/colorsConstants";
import IonIcons from "react-native-vector-icons/Ionicons";

const AddItemButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        bottom: 32,
        right: 32,
      }}
      onPress={() => onPress()}
    >
      <View
        style={{
          width: 64,
          height: 64,
          borderRadius: 64 / 2,
          backgroundColor: colorsConstants.primary,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IonIcons name="add" size={24} color="#ffffff" />
      </View>
    </TouchableOpacity>
  );
};

export default AddItemButton;
