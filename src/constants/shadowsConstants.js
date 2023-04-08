import { Platform } from "react-native";

const shadows =
  Platform.OS === "ios"
    ? {
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      }
    : {
        elevation: 3,
      };

export default shadows;
