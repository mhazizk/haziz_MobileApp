import { View, Text, FlatList } from "react-native";
import React from "react";
import CardItem from "../molecules/CardItem";

const ProductGridList = ({ data, onPress }) => {
  return (
    <>
      <FlatList
        data={data}
        style={{ width: "100%", padding: 16 }}
        numColumns={2}
        contentContainerStyle={{ height: "100%", alignItems: "flex-start" }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <>
              {data.length > 0 && (
                <CardItem
                  key={item.id}
                  item={item}
                  onPress={(food_code) => onPress(food_code)}
                />
              )}
            </>
          );
        }}
      />
    </>
  );
};

export default ProductGridList;
