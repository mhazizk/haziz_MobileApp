import { Alert } from "react-native";
import React from "react";
import ProductRowList from "../components/organisms/ProductRowList";
import getDataFromServer from "../api/getDataFromServer";
import apiEndpointsConstants from "../constants/apiEndpointsConstants";
import AddItemButton from "../components/atoms/AddItemButton";
import ItemPopup from "../components/organisms/ItemPopup";
import deleteItemFromServer from "../api/deleteItemFromServer";
import addItemToServer from "../api/addItemToServer";
import patchItemToServer from "../api/patchItemToServer";
import Loading from "../components/atoms/Loading";
import SearchBar from "../components/organisms/SearchBar";
import filterMenu from "../utils/filterMenu";

const AdminScreen = ({ route, navigation }) => {
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [query, setQuery] = React.useState("");
  const [menu, setMenu] = React.useState([]);
  const [fullMenu, setFullMenu] = React.useState([]);
  const [showItemPopup, setShowItemPopup] = React.useState(false);
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
      setIsLoading(false);
    });
  };

  const productListButtonOnPress = (action, item) => {
    const { id, food_code, name, ...rest } = item;
    switch (action) {
      case "remove":
        Alert.alert(
          "Delete Item",
          `Are you sure you want to delete this item?\n\n${name}`,
          [
            {
              text: "Cancel",
              style: "cancel",
            },
            {
              text: "Delete",
              onPress: () => {
                setIsLoading(true);
                deleteItemFromServer(id)
                  .then(() => alert("Item deleted successfully!"))
                  .then(() => {
                    getDataFromServer(apiEndpointsConstants.baseUrl).then(
                      (data) => {
                        setMenu(data);
                        setIsLoading(false);
                      }
                    );
                  });
              },
            },
          ]
        );

        break;

      case "edit":
        setSelectedItem(item);
        setShowItemPopup(true);
        break;
    }
  };

  const onPressFinishPopup = (action, item) => {
    switch (action) {
      case "add":
        setIsLoading(true);
        return addItemToServer(item).then(() => {
          getDataFromServer(apiEndpointsConstants.baseUrl)
            .then((data) => {
              setMenu(data);
              setIsLoading(false);
            })
            .then(() => setShowItemPopup(false));
        });
      case "update":
        setIsLoading(true);
        return patchItemToServer(item).then(() => {
          alert("Item updated successfully!");
          getDataFromServer(apiEndpointsConstants.baseUrl)
            .then((data) => {
              setMenu(data);
              setIsLoading(false);
            })
            .then(() => setShowItemPopup(false))
            .then(() => {
              setSelectedItem(null);
            });
        });
    }
  };

  return (
    <>
      {showItemPopup && (
        <ItemPopup
          selectedItem={selectedItem}
          menu={menu}
          onPressFinish={(action, item) => onPressFinishPopup(action, item)}
          onPressDismiss={() => {
            setShowItemPopup(false);
            setSelectedItem(null);
          }}
        />
      )}
      <SearchBar value={query} onChange={(text) => setQuery(text)} />
      {isLoading && <Loading />}
      {!isLoading && (
        <ProductRowList
          data={menu}
          isLoading={isLoading}
          onRefresh={() => fetchData()}
          onPress={(action, item) => productListButtonOnPress(action, item)}
        />
      )}
      <AddItemButton onPress={() => setShowItemPopup(true)} />
    </>
  );
};

export default AdminScreen;
