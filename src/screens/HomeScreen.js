import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import PrimaryButton from "../components/atoms/PrimaryButton";
import screenListConstants from "../constants/screenListConstants";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={require("../assets/icon.png")}
        style={{
          width: 128,
          height: 128,
        }}
      />
      <Text style={{ fontWeight: "bold", fontSize: 24, padding: 16 }}>
        Welcome to PoS!
      </Text>
      <PrimaryButton
        label="Customer"
        marginBottom={16}
        onPress={() =>
          navigation.navigate(screenListConstants.CUSTOMER_SCREEN.NAME)
        }
      />
      <PrimaryButton
        label="Admin"
        onPress={() =>
          navigation.navigate(screenListConstants.ADMIN_SCREEN.NAME)
        }
      />
      <Text
        style={{
          position: "absolute",
          bottom: 32,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {`v1.0.0\nHaziz\n2023`}
      </Text>
    </ScrollView>
  );
};

export default HomeScreen;
