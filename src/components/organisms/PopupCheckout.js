import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import CartItem from "../molecules/CartItem";
import CheckoutItem from "../molecules/CheckoutItem";
import getTotalPrice from "../../utils/getTotalPrice";
import PrimaryButton from "../atoms/PrimaryButton";
import CustomTextInput from "../atoms/CustomTextInput";
import colorsConstants from "../../constants/colorsConstants";

const PopupCheckout = ({ cartList, onPressDismiss }) => {
  const [cash, setCash] = React.useState(0);

  const change = cash - getTotalPrice(cartList);

  return (
    <>
      <View
        style={{
          top: "25%",
          // bottom: "25%",
          padding: 16,
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "flex-start",
          position: "absolute",
          width: "80%",
          zIndex: 10,
          backgroundColor: "white",
          borderRadius: 16,
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              padding: 16,
              color: colorsConstants.primary,
            }}
          >
            Detail Pesanan
          </Text>
        </View>

        {cartList.length > 0 &&
          cartList.map((item) => <CheckoutItem key={item?.id} item={item} />)}
        <View
          style={{
            paddingHorizontal: 8,
            flexDirection: "row",
            paddingTop: 16,
            alignItems: "center",
            marginBottom: 4,
          }}
        >
          <Text style={{ fontWeight: "bold", flex: 2 }}>Total</Text>
          <Text style={{ fontWeight: "bold" }}>:</Text>
          <View
            style={{
              flex: 3,
              height: 36,
              alignItems: "flex-end",
              justifyContent: "center",
              borderRadius: 8,
              marginLeft: 8,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                textAlign: "right",
                paddingRight: 8,
              }}
            >
              {getTotalPrice(cartList)}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 8,
            alignItems: "center",
            marginVertical: 4,
          }}
        >
          <Text style={{ fontWeight: "bold", flex: 2 }}>Uang dibayar</Text>
          <Text style={{ fontWeight: "bold" }}>:</Text>
          <View
            style={{
              flex: 3,
              borderRadius: 8,
              overflow: "hidden",
              marginLeft: 8,
            }}
          >
            <CustomTextInput
              backgroundColor="#F4F4F4"
              defaultValue={"0"}
              value={cash.toString()}
              onChange={(number) => (number > 0 ? setCash(number) : setCash(0))}
              keyboardType="numeric"
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 8,
            paddingBottom: 24,
            alignItems: "center",
            marginVertical: 4,
          }}
        >
          <Text style={{ fontWeight: "bold", flex: 2 }}>Kembalian</Text>
          <Text style={{ fontWeight: "bold" }}>:</Text>
          <View
            style={{
              flex: 3,
              height: 36,
              alignItems: "flex-end",
              justifyContent: "center",
              backgroundColor: change < 0 ? "pink" : "#D6E6D8",
              borderRadius: 8,
              marginLeft: 8,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                textAlign: "right",
                color: change < 0 ? "red" : "black",
                paddingRight: 8,
              }}
            >
              {change}
            </Text>
          </View>
        </View>
        <PrimaryButton
          isEnabled={cash >= getTotalPrice(cartList)}
          label="Cetak Struk"
          onPress={() => {}}
        />
      </View>

      <TouchableOpacity
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.8)",
          zIndex: 9,
        }}
        onPress={() => onPressDismiss()}
      />
    </>
  );
};

export default PopupCheckout;
