import axios from "axios";
import apiEndpointsConstants from "../constants/apiEndpointsConstants";

const patchItemToServer = async (item) => {
  const { id, ...rest } = item;
  try {
    const response = await axios.put(apiEndpointsConstants.baseUrl + id, rest);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export default patchItemToServer;
