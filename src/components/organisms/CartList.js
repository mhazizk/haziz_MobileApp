import { View, Text, FlatList, Dimensions } from "react-native";
import React from "react";
import PrimaryButton from "../atoms/PrimaryButton";
import ProductGridList from "./ProductGridList";
import CartItem from "../molecules/CartItem";
import CardItem from "../molecules/CardItem";
import getTotalPrice from "../../utils/getTotalPrice";
import colorsConstants from "../../constants/colorsConstants";

const CartList = ({
  showAllCartListState,
  peekCartState,
  cartListState,
  onPressCharge,
}) => {
  const [showAllCartList, setShowAllCartList] = showAllCartListState;
  const [peekCartList, setPeekCartList] = peekCartState;
  const [cartList, setCartList] = cartListState;

  const height = Dimensions.get("window").height * 0.7;

  const cartItemOnPress = (action, food_code) => {
    switch (true) {
      case action === "increase":
        const increased = cartList.map((item) => {
          if (item.food_code === food_code)
            return {
              ...item,
              additionalInfo: {
                ...item.additionalInfo,
                quantity: item.additionalInfo.quantity + 1,
              },
            };
          return item;
        });

        return setCartList(increased);

      case action === "decrease":
        const foundItem = cartList.find((item) => {
          if (item.food_code === food_code) return item;
        });

        if (foundItem.additionalInfo.quantity === 1) {
          const filtered = cartList.filter((item) => {
            if (item.food_code !== food_code) return item;
          });
          return setCartList(filtered);
        } else {
          const decreased = cartList.map((item) => {
            if (item.food_code === food_code)
              return {
                ...item,
                additionalInfo: {
                  ...item.additionalInfo,
                  quantity: item.additionalInfo.quantity - 1,
                },
              };
            return item;
          });
          return setCartList(decreased);
        }
    }
  };

  return (
    <View
      style={{
        maxHeight: height,
        width: "100%",
        padding: 16,
        borderTopColor: colorsConstants.primary,
        borderTopWidth: 2,
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1,
      }}
    >
      <View
        style={{
          position: "absolute",
          top: -20,
        }}
      >
        <PrimaryButton
          width={48}
          label={showAllCartList ? "▼" : "▲"}
          onPress={() => {
            setShowAllCartList(!showAllCartList);
            setPeekCartList(false);
          }}
        />
      </View>
      <View
        style={{
          maxHeight: 250,
          width: "100%",
          padding: 16,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "bold" }}>{`Rp. ${getTotalPrice(
          cartList
        )}`}</Text>
        <PrimaryButton
          isEnabled={cartList.length > 0}
          width={120}
          label="Charge"
          onPress={() => onPressCharge()}
        />
      </View>
      {(peekCartList || showAllCartList) && (
        <FlatList
          data={peekCartList ? cartList[0] : cartList}
          style={{ width: "100%", padding: 16 }}
          contentContainerStyle={{
            width: "100%",
            alignItems: "center",
          }}
          keyExtractor={(item) => item?.id}
          renderItem={({ item }) => {
            return (
              <>
                {cartList.length > 0 && (
                  <CartItem
                    key={item?.id}
                    item={item}
                    onPress={(action, food_code) =>
                      cartItemOnPress(action, food_code)
                    }
                  />
                )}
              </>
            );
          }}
        />
      )}
    </View>
  );
};

export default CartList;
