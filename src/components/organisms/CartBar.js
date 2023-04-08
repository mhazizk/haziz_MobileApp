import { View, Text, FlatList, Dimensions } from "react-native";
import React from "react";
import PrimaryButton from "../atoms/PrimaryButton";
import ProductGridList from "./ProductGridList";
import CartItem from "../molecules/CartItem";
import CardItem from "../molecules/CardItem";
import getTotalPrice from "../../utils/getTotalPrice";
import colorsConstants from "../../constants/colorsConstants";
import IonIcons from "react-native-vector-icons/Ionicons";
import ItemCounterBubble from "../atoms/ItemCounterBubble";
import addNumberDelimiterCurrencyAndStringify from "../../utils/addNumberDelimiterCurrencyAndStringify";
import ArrowButton from "../atoms/ArrowButton";
import shadows from "../../constants/shadowsConstants";

const CartBar = ({ showAllCartListState, cartListState, onPressCharge }) => {
  const [showAllCartList, setShowAllCartList] = showAllCartListState;
  const [cartList, setCartList] = cartListState;

  const height = Dimensions.get("window").height * 0.7;

  const cartItemOnPress = (action, food_code) => {
    switch (action) {
      case "increase":
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

      case "decrease":
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
        backgroundColor: "#ffffff",
        borderTopColor: colorsConstants.primary,
        borderTopWidth: 2,
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        ...shadows,
      }}
    >
      <View
        style={{
          position: "absolute",
          top: -20,
        }}
      >
        <ArrowButton
          name={showAllCartList ? "caret-down" : "caret-up"}
          onPress={() => {
            setShowAllCartList(!showAllCartList);
          }}
        />
      </View>
      <View
        style={{
          maxHeight: 250,
          width: "100%",
          padding: 8,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{}}>
            <IonIcons
              name="cart-outline"
              size={36}
              color={colorsConstants.primary}
            />
            {cartList.length > 0 && <ItemCounterBubble cartList={cartList} />}
          </View>
          <Text style={{ paddingLeft: 16, fontWeight: "bold" }}>
            {addNumberDelimiterCurrencyAndStringify(getTotalPrice(cartList))}
          </Text>
        </View>
        <PrimaryButton
          isEnabled={cartList.length > 0}
          width={120}
          label="Charge"
          onPress={() => onPressCharge()}
        />
      </View>
      {showAllCartList && (
        <FlatList
          data={cartList}
          style={{ width: "100%", marginTop: 16 }}
          contentContainerStyle={{
            width: "100%",
            alignItems: "center",
          }}
          keyExtractor={(item) => item?.id}
          ListEmptyComponent={() => {
            return <Text>No items in cart yet</Text>;
          }}
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

export default CartBar;
