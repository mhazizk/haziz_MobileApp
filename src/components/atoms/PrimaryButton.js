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
  ...rest
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
        ...rest,
      }}
    >
      <Text numberOfLines={1} style={{ color: "#ffffff", fontWeight: "bold" }}>
        {label || "Primary Button"}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
