import axios from "axios";

const { REACT_APP_PATH_BACKEND } = process.env;

interface IBodyForCreateRequest {
    user: {
        name: string;
        email: string;
        phone: string;
        address: string
    },
    products: {
        id: number;
        image: string;
        price: number;
        label: string;
        maxCount: number;
        count: number;
    }[],
    date: string
    }


async function createOrderForUser(body: IBodyForCreateRequest) {
    try {
      const result = await axios.post(`${REACT_APP_PATH_BACKEND}/users`, body);
    return  result.data
    } catch (error) {
        return error;
    }
}

export default createOrderForUser;