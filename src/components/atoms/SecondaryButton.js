import {
  View,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import React from "react";
import colorsConstants from "../../constants/colorsConstants";

const SecondaryButton = ({
  isEnabled = true,
  buttonColor,
  width,
  label,
  onPress,
  ...rest
}) => {
  return (
    <TouchableOpacity
      disabled={!isEnabled}
      onPress={() => (isEnabled ? onPress() : null)}
      style={{
        alignItems: "center",
        justifyContent: "center",
        borderColor: isEnabled ? buttonColor || "#233C7D" : "gray",
        borderWidth: 2,
        backgroundColor: "white",
        minHeight: 36,
        borderRadius: 8,
        width: width || 200,
        paddingHorizontal: 16,
        paddingVertical: 8,
        ...rest,
      }}
    >
      <Text style={{ color: colorsConstants.primary, fontWeight: "bold" }}>
        {label || "Secondary Button"}
      </Text>
    </TouchableOpacity>
  );
};

export default SecondaryButton;
