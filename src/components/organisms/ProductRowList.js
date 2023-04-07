import { View, Text, FlatList, RefreshControl } from "react-native";
import React from "react";
import CardItem from "../molecules/CardItem";
import ListItem from "../molecules/ListItem";

const ProductRowList = ({ isLoading, onRefresh, data, onPress }) => {
  return (
    <>
      {data?.length > 0 && (
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={() => onRefresh()}
            />
          }
          data={data}
          style={{ width: "100%", padding: 16 }}
          contentContainerStyle={{
            alignItems: "flex-start",
            paddingBottom: 128,
          }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <>
                {data.length > 0 && (
                  <ListItem
                    key={item.id}
                    item={item}
                    onPress={(action, item) => onPress(action, item)}
                  />
                )}
              </>
            );
          }}
        />
      )}
    </>
  );
};

export default ProductRowList;
