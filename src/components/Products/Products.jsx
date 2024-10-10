import { useEffect, useState } from "react";

import ProductsGrid from "./ProductsGrid";
import { getProductList } from "../../controllers";
import { getExchangeRate } from "../../controllers/rates.controller";
import SearchBar from "../SearchBar/SearchBar";
import ProductFallPage from "./ProductFallPage";

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
      productLists?.filter((product) =>
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
      // await setRate(await getExchangeRate());
      await setProductLists(await getProductList);
      await setFilterLists(await getProductList);
      await setIsLoading(false);
    };

    fetchData();
  }, [getProductList]);

  return (
    <>
      <SearchBar queryLoad={queryLoad} filter={filter} />
      {productLists.length !== 0 && filterLists.length <= 0 ? (
        <ProductFallPage />
      ) : (
        <ProductsGrid
          isLoading={isLoading}
          data={filterLists}
          rate={rate?.rates?.[CURRENCY]}
          isModalOpen={isModalOpen}
          showModal={showModal}
          record={record}
          handleCancel={handleCancel}
          setRecord={setRecord}
        />
      )}
    </>
  );
};

export default Products;
