import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import PrimaryButton from "../atoms/PrimaryButton";
import PriceLabel from "../atoms/PriceLabel";
import IconButton from "../atoms/IconButton";
import colorsConstants from "../../constants/colorsConstants";

const ListItem = ({ item, onPress }) => {
  const { id, food_code, name, picture, picture_ori, price, created_at } = item;

  const width = Dimensions.get("window").width - 32;

  return (
    <>
      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 8,
          flexDirection: "row",
          width: width,
          borderRadius: 16,
          marginBottom: 8,
          alignItems: "center",
          backgroundColor: "#ffffff",
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
            alignItems: "flex-start",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>{name}</Text>
          <PriceLabel price={price} />
        </View>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            marginVertical: 4,
          }}
        >
          <PrimaryButton
            label="Edit"
            width={64}
            marginBottom={4}
            onPress={() => {
              onPress("edit", item);
            }}
          />
          <IconButton
            name="trash"
            size={24}
            color={colorsConstants.danger}
            onPress={() => {
              onPress("remove", item);
            }}
          />
        </View>
      </View>
    </>
  );
};

export default ListItem;
