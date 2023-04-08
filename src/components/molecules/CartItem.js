import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import PrimaryButton from "../atoms/PrimaryButton";
import PriceLabel from "../atoms/PriceLabel";
import colorsConstants from "../../constants/colorsConstants";
import SecondaryButton from "../atoms/SecondaryButton";

const CartItem = ({ item, onPress }) => {
  const { id, food_code, name, picture, picture_ori, price, created_at } = item;
  const { quantity } = item.additionalInfo;

  const width = Dimensions.get("window").width - 32;

  return (
    <>
      <View
        style={{
          paddingHorizontal: 16,
          flexDirection: "row",
          width: width,
          borderRadius: 16,
          marginBottom: 8,
          alignItems: "center",
        }}
      >
        <View style={{ flex: 1 }}>
          <Image
            source={{ uri: picture }}
            style={{ width: 64, height: 64, borderRadius: 8 }}
          />
        </View>
        <View
          style={{
            flex: 2,
            // padding: 16,
            alignItems: "flex-start",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>{name}</Text>
          <PriceLabel price={price} />
        </View>
        <View style={{ flex: 0, flexDirection: "row", alignItems: "center" }}>
          <SecondaryButton
            width={42}
            label="-"
            onPress={() => {
              onPress("decrease", food_code);
            }}
          />
          <Text style={{ fontWeight: "bold", paddingHorizontal: 8 }}>
            {quantity}
          </Text>
          <PrimaryButton
            width={42}
            label="+"
            onPress={() => {
              onPress("increase", food_code);
            }}
          />
        </View>
      </View>
    </>
  );
};

export default CartItem;
