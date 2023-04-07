import { View, Text } from "react-native";
import React from "react";
import IonIcons from "react-native-vector-icons/Ionicons";
import colorsConstants from "../../constants/colorsConstants";

const PopupTitle = ({ title }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: 8,
      }}
    >
      <IonIcons name="restaurant" size={36} color={colorsConstants.primary} />
      <Text
        style={{
          fontWeight: "bold",
          padding: 16,
          color: colorsConstants.primary,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default PopupTitle;
