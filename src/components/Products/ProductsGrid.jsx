import { Table, Image, Spin } from "antd";

import { Tooltip } from "antd";

import ProductModal from "./ProductModal";

const ProductsGrid = ({
  data,
  rate,
  showModal,
  handleCancel,
  isModalOpen,
  record,
  setRecord,
  isLoading,
}) => {
  const columns = [
    {
      title: "Thumbnail",
      dataIndex: ["thumbnail", "images"],
      width: "15%",
      key: "thumbnail",
      align: "center",
      render: (text, record) => (
        <Image.PreviewGroup
          items={
            record?.images.length <= 3
              ? record?.images
              : record?.images.filter((element, index) => index < 4)
          }
        >
          <Image width={200} src={record?.thumbnail} />
        </Image.PreviewGroup>
      ),
    },
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
      align: "center",
      width: "75%",
      render: (record) => (
        <Tooltip title="Double Click Me" color="blue">
          <span>{record}</span>
        </Tooltip>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (record) => ` ${"\u20B1"} ${(record * rate).toFixed(2)}`,
      align: "center",
      width: "10%",
    },
  ];

  return (
    <>
      <Spin spinning={isLoading}>
        <Table
          rowKey="id"
          onRow={(record, rowIndex) => {
            return {
              onDoubleClick: async (event) => (
                await setRecord(record), await showModal()
              ),
            };
          }}
          columns={columns}
          size={"middle"}
          dataSource={data?.products || data}
        />
        <ProductModal
          handleCancel={handleCancel}
          data={record}
          isModalOpen={isModalOpen}
          rate={rate}
        />
      </Spin>
    </>
  );
};

export default ProductsGrid;
