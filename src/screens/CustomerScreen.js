import React from "react";
import SearchBar from "../components/organisms/SearchBar";
import ProductGridList from "../components/organisms/ProductGridList";
import CartBar from "../components/organisms/CartBar";
import getDataFromServer from "../api/getDataFromServer";
import apiEndpointsConstants from "../constants/apiEndpointsConstants";
import PopupCheckout from "../components/organisms/PopupCheckout";
import Loading from "../components/atoms/Loading";
import filterMenu from "../utils/filterMenu";

const CustomerScreen = ({ route, navigation }) => {
  const [query, setQuery] = React.useState("");
  const [menu, setMenu] = React.useState([]);
  const [fullMenu, setFullMenu] = React.useState([]);
  const [showAllCartList, setShowAllCartList] = React.useState(false);
  const [cartList, setCartList] = React.useState([]);
  const [showCheckoutPopup, setShowCheckoutPopup] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetchData();
  }, []);

  React.useEffect(() => {
    if (query) {
      const filteredData = filterMenu(query, fullMenu);
      setMenu(filteredData);
    } else {
      fetchData();
    }
  }, [query]);

  const fetchData = async () => {
    setIsLoading(true);
    return getDataFromServer(apiEndpointsConstants.baseUrl).then((data) => {
      setMenu(data);
      setFullMenu(data);
      setQuery("");
      setIsLoading(false);
    });
  };

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
      {isLoading && <Loading />}
      {!isLoading && (
        <ProductGridList
          data={menu}
          isLoading={isLoading}
          onRefresh={() => fetchData()}
          onPress={(food_code) => {
            addProductToCart(food_code);
          }}
        />
      )}
      <CartBar
        showAllCartListState={[showAllCartList, setShowAllCartList]}
        cartListState={[cartList, setCartList]}
        onPressCharge={() => {
          setShowCheckoutPopup(true);
        }}
      />
    </>
  );
};

export default CustomerScreen;
