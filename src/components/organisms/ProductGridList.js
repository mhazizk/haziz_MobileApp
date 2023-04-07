import { View, Text, FlatList, RefreshControl } from "react-native";
import React from "react";
import CardItem from "../molecules/CardItem";

const ProductGridList = ({ isLoading, onRefresh, data, onPress }) => {
  return (
    <>
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={() => onRefresh()}
          />
        }
        data={data}
        style={{
          width: "100%",
          padding: 16,
        }}
        numColumns={2}
        contentContainerStyle={{ alignItems: "flex-start", paddingBottom: 128 }}
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
