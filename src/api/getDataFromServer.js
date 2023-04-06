import axios from "axios";

const getDataFromServer = async (url) => {
  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      return response.data;
    }
  } catch (e) {
    console.log(e);
  }
};

export default getDataFromServer;
