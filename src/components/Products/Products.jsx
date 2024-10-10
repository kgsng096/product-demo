import { useEffect, useState } from "react";

import ProductsGrid from "./ProductsGrid";
import { getProductList } from "../../controllers";
import { getExchangeRate } from "../../controllers/rates.controller";
import SearchBar from "../SearchBar/SearchBar";

const CURRENCY = "PHP";

const Products = () => {
  const [productLists, setProductLists] = useState([]);
  const [filterLists, setFilterLists] = useState([]);
  const [rate, setRate] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [record, setRecord] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [queryLoad, setQueryLoading] = useState(false);

  const filter = async (event) => {
    await setQueryLoading(true);
    await setFilterLists(
      productLists?.products?.filter((product) =>
        product.title.toLowerCase().includes(event.target.value)
      )
    );
    await setQueryLoading(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setRecord([]);
  };

  useEffect(() => {
    const fetchData = async () => {
      setProductLists(await getProductList);
      setFilterLists(await getProductList);
      setIsLoading(false);
    };

    const fetchRate = async () => {
      setRate(await getExchangeRate());
    };

    fetchData();
    fetchRate();
  }, [getProductList]);

  return (
    <>
      <SearchBar queryLoad={queryLoad} filter={filter} />
      <ProductsGrid
        isLoading={isLoading}
        data={filterLists}
        rate={rate?.rates[CURRENCY]}
        isModalOpen={isModalOpen}
        showModal={showModal}
        record={record}
        handleCancel={handleCancel}
        setRecord={setRecord}
      />
    </>
  );
};

export default Products;
