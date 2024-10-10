import axios from "axios";

export const getProducts = async () => {
  const list = [];
  try {
    const { data } = await axios.get(import.meta.env.VITE_APP_PRODUCTS_URL);

    data?.products.map((product) => list.push(product));
    return list;
  } catch (error) {
    console.log(error);
  }
};
