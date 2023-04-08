import { View, Text } from "react-native";
import React from "react";
import colorsConstants from "../../constants/colorsConstants";
import addNumberDelimiterCurrencyAndStringify from "../../utils/addNumberDelimiterCurrencyAndStringify";

const PriceLabel = ({ price }) => {
  return (
    <>
      <Text style={{ flexDirection: "row" }}>
        <Text
          style={{
            color: colorsConstants.primary,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            {addNumberDelimiterCurrencyAndStringify(price)}
          </Text>
          <Text style={{ color: "gray" }}> / porsi</Text>
        </Text>
      </Text>
    </>
  );
};

export default PriceLabel;
