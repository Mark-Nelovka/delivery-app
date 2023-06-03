import axios from "axios";

const { REACT_APP_PATH_BACKEND } = process.env;
const { REACT_APP_URL_API } = process.env;

axios.defaults.baseURL = `${REACT_APP_URL_API}`;
async function getShopsWithProducts() {
    try {
      const result = await axios.get(`${REACT_APP_PATH_BACKEND}/shops`);
    return  result.data
    } catch (error) {
        
    }
}

export default getShopsWithProducts;