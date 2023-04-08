import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import IonIcons from "react-native-vector-icons/Ionicons";
import colorsConstants from "../../constants/colorsConstants";

const CloseButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={{
        position: "absolute",
        top: -8,
        right: -8,
        backgroundColor: colorsConstants.danger,
        width: 36,
        height: 36,
        borderRadius: 36 / 2,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
      }}
    >
      <IonIcons name="close" size={24} color="#ffffff" />
    </TouchableOpacity>
  );
};

export default CloseButton;
