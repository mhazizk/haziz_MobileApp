import axios from "axios";
import apiEndpointsConstants from "../constants/apiEndpointsConstants";

const addItemToServer = async (item) => {
  try {
    const response = await axios.post(apiEndpointsConstants.baseUrl, item);
    if (response.status === 201) {
      return response.data;
    }
  } catch (e) {
    console.log(e);
  }
};

export default addItemToServer;
