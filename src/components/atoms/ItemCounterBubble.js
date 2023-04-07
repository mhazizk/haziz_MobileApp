import { View, Text } from "react-native";
import React from "react";
import colorsConstants from "../../constants/colorsConstants";

const ItemCounterBubble = ({ cartList }) => {
  let totalQuantity = 0;
  cartList.forEach((item) => {
    totalQuantity += item.additionalInfo.quantity;
  });
  //   const totalItems = cartList.length + totalQuantity;
  return (
    <View
      style={{
        position: "absolute",
        top: -10,
        right: -10,
        backgroundColor: colorsConstants.danger,
        width: 24,
        height: 24,
        borderRadius: 24 / 2,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
      }}
    >
      <Text style={{ color: "#ffffff" }}>
        {totalQuantity === 0 ? "0" : totalQuantity}
      </Text>
    </View>
  );
};

export default ItemCounterBubble;
