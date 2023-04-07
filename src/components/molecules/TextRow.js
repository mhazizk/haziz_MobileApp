import { View, Text } from "react-native";
import React from "react";

const TextRow = ({
  rowName,
  value,
  paddingTop = 0,
  paddingBottom = 0,
  backgroundColor,
  textColor,
}) => {
  return (
    <View
      style={{
        paddingHorizontal: 8,
        flexDirection: "row",
        paddingTop: paddingTop,
        paddingBottom: paddingBottom,
        alignItems: "center",
        marginBottom: 4,
      }}
    >
      <Text style={{ fontWeight: "bold", flex: 2 }}>{rowName}</Text>
      <Text style={{ fontWeight: "bold" }}>:</Text>
      <View
        style={{
          flex: 3,
          height: 36,
          alignItems: "flex-end",
          justifyContent: "center",
          borderRadius: 8,
          marginLeft: 8,
          backgroundColor: backgroundColor || "white",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            textAlign: "right",
            paddingRight: 8,
            color: textColor || "black",
          }}
        >
          {value}
        </Text>
      </View>
    </View>
  );
};

export default TextRow;
