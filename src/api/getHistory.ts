import axios from "axios";

const { REACT_APP_PATH_BACKEND } = process.env;

async function getOrderHistory(info: {email: string, phone: string}) {
    try {
      const result = await axios.get(`${REACT_APP_PATH_BACKEND}/history?email=${info.email}&phone=${info.phone}`);
    return  result.data
    } catch (error) {
        return error;
    }
}

export default getOrderHistory;