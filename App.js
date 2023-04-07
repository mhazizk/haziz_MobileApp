import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import StackNavigation from "./src/navigation/StackNavigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <StatusBar />
        {/* <SafeAreaView /> */}
        <StackNavigation />
      </NavigationContainer>
    </>
  );
}
