import {
  View,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import React from "react";

const PrimaryButton = ({
  isEnabled = true,
  buttonColor,
  width,
  label,
  onPress,
}) => {
  return (
    <TouchableOpacity
      disabled={!isEnabled}
      onPress={() => (isEnabled ? onPress() : null)}
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: isEnabled ? buttonColor || "#233C7D" : "gray",
        minHeight: 36,
        borderRadius: 8,
        width: width || 200,
        paddingHorizontal: 16,
        paddingVertical: 8,
      }}
    >
      <Text style={{ color: "white" }}>{label || "Primary Button"}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
