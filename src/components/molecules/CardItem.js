import { View, Text, Image, Dimensions, Platform } from "react-native";
import React from "react";
import PrimaryButton from "../atoms/PrimaryButton";
import colorsConstants from "../../constants/colorsConstants";
import PriceLabel from "../atoms/PriceLabel";

const CardItem = ({ item, onPress }) => {
  const { id, food_code, name, picture, picture_ori, price, created_at } = item;

  const width = Dimensions.get("window").width / 2 - 32;

  const shadows =
    Platform.OS === "ios"
      ? {
          shadowColor: "#171717",
          shadowOffset: { width: -2, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
        }
      : {
          elevation: 3,
        };

  return (
    <View
      style={{
        minHeight: width * 1.5,
        width: width,
        alignItems: "center",
        borderRadius: 8,
        margin: 8,
        backgroundColor: "#eee",
        overflow: "hidden",
        ...shadows,
      }}
    >
      <View style={{ flex: 1.5, width: "100%" }}>
        <Image
          source={{ uri: picture }}
          style={{ flex: 1, width: "100%", height: "100%" }}
        />
      </View>
      <View
        style={{ flex: 0, width: "100%", padding: 8, alignItems: "center" }}
      >
        <View
          style={{
            width: "100%",
            alignItems: "flex-start",
            justifyContent: "center",
            paddingBottom: 8,
          }}
        >
          <Text style={{ fontWeight: "bold", paddingBottom: 8 }}>{name}</Text>
          <PriceLabel price={price} />
        </View>
        <PrimaryButton
          label="Order"
          width={width - 32}
          onPress={() => {
            onPress(food_code);
          }}
        />
      </View>
    </View>
  );
};

export default CardItem;
