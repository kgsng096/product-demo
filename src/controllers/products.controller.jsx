import axios from "axios";

export const getProducts = async () => {
  try {
    const { data } = await axios.get(import.meta.env.VITE_APP_PRODUCTS_URL);
    return data;
  } catch (error) {
    console.log(error);
  }
};
