import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import colorsConstants from "../../constants/colorsConstants";

const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <ActivityIndicator size={48} color={colorsConstants.primary} />
    </View>
  );
};

export default Loading;
