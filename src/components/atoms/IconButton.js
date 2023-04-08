import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import IonIcons from "react-native-vector-icons/Ionicons";
import colorsConstants from "../../constants/colorsConstants";

const IconButton = ({ name, size, color, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        paddingLeft: 16,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={() => onPress()}
    >
      <IonIcons
        name={name}
        size={size || 36}
        color={color || colorsConstants.primary}
      />
    </TouchableOpacity>
  );
};

export default IconButton;
