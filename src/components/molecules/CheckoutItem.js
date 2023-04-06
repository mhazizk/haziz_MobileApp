import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import PrimaryButton from "../atoms/PrimaryButton";
import PriceLabel from "../atoms/PriceLabel";

const CheckoutItem = ({ item }) => {
  const { id, food_code, name, picture, picture_ori, price, created_at } = item;
  const { quantity } = item.additionalInfo;

  return (
    <>
      <View
        style={{
          // padding: 16,
          flexDirection: "row",
          width: "100%",
          borderRadius: 16,
          backgroundColor: "white",
          marginBottom: 2,
          alignItems: "center",
        }}
      >
        <View style={{ flex: 0 }}>
          <Image
            source={{ uri: picture }}
            style={{ width: 64, height: 64, borderRadius: 8 }}
          />
        </View>
        <View
          style={{
            flex: 2,
            padding: 16,
            alignItems: "flex-start",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>{name}</Text>
          <PriceLabel price={price} />
        </View>
        <View style={{ flex: 0, flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", paddingHorizontal: 8 }}>
            {"x " + quantity}
          </Text>
        </View>
      </View>
    </>
  );
};

export default CheckoutItem;
