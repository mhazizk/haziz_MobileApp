import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import colorsConstants from "../../constants/colorsConstants";
import IonIcons from "react-native-vector-icons/Ionicons";

const ArrowButton = ({ name, onPress }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colorsConstants.primary,
        minHeight: 36,
        borderRadius: 64 / 2,
        width: 64,
        paddingHorizontal: 16,
        paddingVertical: 8,
      }}
    >
      <IonIcons name={name} size={24} color="#ffffff" />
    </TouchableOpacity>
  );
};

export default ArrowButton;
