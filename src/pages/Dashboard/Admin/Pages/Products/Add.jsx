import { Upload } from "antd";
import React, { useState } from "react";
import { PictureFilled } from "@ant-design/icons";
const Add = () => {
  const [file, setFile] = useState([]);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border">
        <Upload
          listType="picture-card"
          beforeUpload={() => false}
          onChange={(images) => {
            setFile(images.fileList);
            console.log("images", images);
            console.log("file", file);
          }}
        >
            <PictureFilled className="text-5xl" />
        </Upload>
      </div>
    </div>
  );
};

export default Add;
