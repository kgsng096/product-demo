import { Modal } from "antd";
import React from "react";
import Product from "./Product";

const ProductModal = ({ handleCancel, data, isModalOpen, rate }) => {
  return (
    <Modal
      title={data?.category?.toUpperCase()}
      open={isModalOpen}
      footer={null}
      onCancel={handleCancel}
    >
      <Product data={data} rate={rate} />
    </Modal>
  );
};

export default ProductModal;
