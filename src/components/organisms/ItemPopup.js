import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
} from "react-native";
import React from "react";
import PrimaryButton from "../atoms/PrimaryButton";
import colorsConstants from "../../constants/colorsConstants";
import InputRow from "../molecules/InputRow";
import getProductModel from "../../models/getProductModel";
import CloseButton from "../atoms/CloseButton";
import IonIcons from "react-native-vector-icons/Ionicons";
import PopupTitle from "../molecules/PopupTitle";

const NewItemPopup = ({
  selectedItem,
  menu,
  onPressFinish,
  onPressDismiss,
}) => {
  const [item, setItem] = React.useState(() =>
    selectedItem ? selectedItem : getProductModel(menu)
  );
  const [showButton, setShowButton] = React.useState(false);

  React.useEffect(() => {
    const checkValues = [];
    for (const key in item) {
      switch (true) {
        case key === "picture_ori":
          checkValues.push(true);
          break;
        case item[key] === "0":
          checkValues.push(false);
          break;
        case !item[key]:
          checkValues.push(false);
          break;
      }
    }
    if (checkValues.includes(false)) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  }, [item]);

  return (
    <>
      <Modal animationType="slide" visible={true} transparent={true}>
        <View
          style={{
            position: "absolute",
            paddingTop: 16,
            paddingHorizontal: 16,
            paddingBottom: 48,
            bottom: 0,
            left: 0,
            right: 0,
            marginHorizontal: 16,
            alignSelf: "center",
            backgroundColor: "#ffffff",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 8,
            zIndex: 10,
          }}
        >
          <CloseButton onPress={() => onPressDismiss()} />
          <PopupTitle title={selectedItem ? "Update Item" : "Add Item"} />
          {item.picture && (
            <Image
              source={{ uri: item.picture }}
              defaultSource={require("../../assets/image_placeholder.png")}
              style={{
                width: "100%",
                height: 200,
                borderRadius: 8,
                marginBottom: 16,
                backgroundColor: colorsConstants.secondary,
              }}
            />
          )}
          <View
            style={{
              width: "100%",
              paddingBottom: 16,
            }}
          >
            <InputRow isEnabled={false} rowName="Code" value={item.food_code} />
            <InputRow
              rowName="Name"
              value={item.name}
              onChange={(text) => {
                setItem({
                  ...item,
                  name: text,
                });
              }}
            />
            <InputRow
              rowName="Price"
              keyboardType="numeric"
              value={item.price}
              onChange={(text) => {
                setItem({
                  ...item,
                  price: text,
                });
              }}
            />
            <InputRow
              rowName="Picture URL"
              value={item.picture}
              onChange={(text) => {
                setItem({
                  ...item,
                  picture: text,
                });
              }}
            />
          </View>
          <PrimaryButton
            isEnabled={showButton}
            label={selectedItem ? "Update Item" : "Add Item"}
            onPress={() => {
              setShowButton(false);
              onPressFinish(selectedItem ? "update" : "add", item);
            }}
          />
        </View>
      </Modal>
      <View
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,0.8)",
          zIndex: 9,
        }}
      />
    </>
  );
};

export default NewItemPopup;
