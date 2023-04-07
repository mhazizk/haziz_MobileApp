import axios from "axios";
import apiEndpointsConstants from "../constants/apiEndpointsConstants";

const deleteItemFromServer = async (id) => {
  try {
    const response = await axios.delete(apiEndpointsConstants.baseUrl + id);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export default deleteItemFromServer;
