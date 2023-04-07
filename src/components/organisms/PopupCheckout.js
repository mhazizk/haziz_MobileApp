import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import CartItem from "../molecules/CartItem";
import CheckoutItem from "../molecules/CheckoutItem";
import getTotalPrice from "../../utils/getTotalPrice";
import PrimaryButton from "../atoms/PrimaryButton";
import CustomTextInput from "../atoms/CustomTextInput";
import colorsConstants from "../../constants/colorsConstants";
import IonIcons from "react-native-vector-icons/Ionicons";
import CloseButton from "../atoms/CloseButton";
import PopupTitle from "../molecules/PopupTitle";
import addNumberDelimiterOnlyAndStringify from "../../utils/addNumberDelimiterOnlyAndStringify";
import InputRow from "../molecules/InputRow";
import TextRow from "../molecules/TextRow";

const PopupCheckout = ({ cartList, onPressDismiss }) => {
  const [cash, setCash] = React.useState(0);

  const change = cash - getTotalPrice(cartList);

  const maxHeight = Dimensions.get("window").height * 0.8;

  return (
    <>
      <View
        style={{
          left: 0,
          right: 0,
          bottom: 0,
          marginHorizontal: 16,
          paddingHorizontal: 16,
          paddingTop: 16,
          paddingBottom: 48,
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          maxHeight: maxHeight,
          zIndex: 10,
          backgroundColor: "#ffffff",
          borderRadius: 16,
        }}
      >
        <CloseButton onPress={() => onPressDismiss()} />
        <PopupTitle title="Detail Pesanan" />

        <ScrollView
          contentContainerStyle={{
            width: "100%",
            alignItems: "center",
          }}
        >
          {cartList.length > 0 &&
            cartList.map((item) => <CheckoutItem key={item?.id} item={item} />)}
          <TextRow
            rowName="Total"
            paddingTop={16}
            value={addNumberDelimiterOnlyAndStringify(getTotalPrice(cartList))}
          />
          <InputRow
            rowName="Uang Dibayar"
            keyboardType="numeric"
            value={cash}
            onChange={(number) => {
              setCash(number);
            }}
          />
          <TextRow
            rowName="Kembalian"
            paddingBottom={16}
            backgroundColor={change < 0 ? "pink" : "#D6E6D8"}
            textColor={change < 0 ? colorsConstants.danger : "black"}
            value={addNumberDelimiterOnlyAndStringify(change)}
          />
        </ScrollView>

        <PrimaryButton
          isEnabled={cash >= getTotalPrice(cartList)}
          label="Cetak Struk"
          onPress={() => alert("Struk berhasil dicetak!")}
        />
      </View>

      <TouchableOpacity
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,0.8)",
          zIndex: 9,
        }}
        onPress={() => onPressDismiss()}
      />
    </>
  );
};

export default PopupCheckout;
