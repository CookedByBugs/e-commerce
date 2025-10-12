import { Col, Form, Row, Upload } from "antd";
import React, { useState } from "react";
import { PictureFilled } from "@ant-design/icons";

const initialState = {
  productName: "",
  productPrice: "",
  productDiscount: "" || 0,
  productDescription: "",
  productBrand: "",
  productCategory: "",
  currency: "",
  taxIncluded: true,
  stock: "",
  activityStatus: true,
  images: null,
  thumbnail: null,
};

const Add = () => {
  const [file, setFile] = useState([]);

  return (
    <div className="min-h-screen w-[80%] mx-auto">
      <div className="text-4xl text-center mt-20 font-semibold">
        Add a Product
      </div>
      <div className="my-10">
        <Form layout="vertical">
          <Row gutter={[16, 16]}>
            <Col lg={12} md={12} sm={24} xs={24}>
              <Form.Item label="Product Name" required>
                <input type="text" className="form-field" />
              </Form.Item>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
              <Form.Item label="Product Name" required>
                <input type="text" className="form-field" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default Add;

{
  /* <Upload
  listType="picture-card"
  beforeUpload={() => false}
  onChange={(images) => {
    setFile(images.fileList);
    console.log("images", images);
    console.log("file", file);
  }}
>
    <PictureFilled className="text-5xl" />
</Upload> */
}
