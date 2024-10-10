import { Card, Flex } from "antd";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";

const Product = ({ data, rate }) => {
  const title = (
    <div>
      <h2>{data?.title}</h2>
      <p>{data?.description}</p>
      <b>{` ${"\u20B1"} ${(data?.price * rate).toFixed(2)}`}</b>
    </div>
  );

  const images =
    data?.images.length <= 3
      ? data?.images
      : data?.images.filter((element, index) => index < 4);

  return (
    <>
      {title}
      <Flex justify="center" gap="middle" align="start">
        <Card>
          {images.map((image) => (
            <LazyLoadImage
              src={image}
              width={"200"}
              height={"200"}
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: "1s" },
              }}
            />
          ))}
        </Card>
      </Flex>
    </>
  );
};

export default Product;
