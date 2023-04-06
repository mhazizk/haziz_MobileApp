import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import FoodListScreen from "./src/screens/FoodListScreen";
import { SafeAreaView } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar />
      <SafeAreaView />
      <FoodListScreen />
    </>
  );
}
