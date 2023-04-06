import { View, Text } from "react-native";
import React from "react";
import SearchBar from "../components/organisms/SearchBar";
import ProductGridList from "../components/organisms/ProductGridList";
import CartList from "../components/organisms/CartList";
import getDataFromServer from "../api/getDataFromServer";
import apiEndpointsConstants from "../constants/apiEndpointsConstants";
import PopupCheckout from "../components/organisms/PopupCheckout";

const FoodListScreen = () => {
  const [query, setQuery] = React.useState("");
  const [menu, setMenu] = React.useState([]);
  const [showAllCartList, setShowAllCartList] = React.useState(false);
  const [peekCartList, setPeekCartList] = React.useState(false);
  const [cartList, setCartList] = React.useState([]);
  const [showCheckoutPopup, setShowCheckoutPopup] = React.useState(false);

  React.useEffect(() => {
    getDataFromServer(apiEndpointsConstants.getAllProducts).then((data) => {
      setMenu(data);
    });
  }, []);

  const addProductToCart = (food_code) => {
    const item = menu.find((item) => {
      if (item.food_code === food_code) return item;
    });
    const additionalInfo = {
      quantity: 1,
      added_at: Date.now(),
    };
    const itemToAdd = {
      ...item,
      additionalInfo: additionalInfo,
    };
    const isAlreadyInCart = cartList.find((item) => {
      if (item.food_code === food_code) return item;
    })
      ? true
      : false;

    if (isAlreadyInCart) {
      return setShowAllCartList(true);
    }

    const newCartList = [...cartList, itemToAdd].sort((a, b) => {
      return b.additionalInfo.added_at - a.additionalInfo.added_at;
    });

    return setCartList(newCartList);
  };

  return (
    <>
      {showCheckoutPopup && (
        <PopupCheckout
          cartList={cartList}
          onPressDismiss={() => {
            setShowCheckoutPopup(false);
          }}
        />
      )}
      <SearchBar value={query} onChange={(text) => setQuery(text)} />
      <ProductGridList
        data={menu}
        onPress={(food_code) => {
          addProductToCart(food_code);
        }}
      />
      <CartList
        peekCartState={[peekCartList, setPeekCartList]}
        showAllCartListState={[showAllCartList, setShowAllCartList]}
        cartListState={[cartList, setCartList]}
        onPressCharge={() => {
          setShowCheckoutPopup(true);
        }}
      />
    </>
  );
};

export default FoodListScreen;
