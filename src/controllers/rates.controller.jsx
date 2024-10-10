import axios from "axios";

//USD BASED
export const getExchangeRate = async () => {
  try {
    const { data } = await axios.get(import.meta.env.VITE_APP_EXCHANGE_RATES);
    return data;
  } catch (error) {
    console.log(error);
  }
};
