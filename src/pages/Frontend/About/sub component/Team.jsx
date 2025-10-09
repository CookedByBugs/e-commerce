import React from "react";
import Emma from "../../../../assets/team/emma.png";
import Tom from "../../../../assets/team/tom.png";
import Will from "../../../../assets/team/will.png";
import { Col, Row } from "antd";
import {
  InstagramOutlined,
  LinkedinFilled,
  TwitterOutlined,
} from "@ant-design/icons";

const Team = () => {
  const teamData = [
    {
      id: 1,
      name: "Tom Cruise",
      title: "Founder & Chairman",
      image: Tom,
    },
    {
      id: 2,
      name: "Emma Watson",
      title: "Managing Director",
      image: Emma,
    },
    {
      id: 3,
      name: "Will Smith",
      title: "Product Designer",
      image: Will,
    },
  ];

  return (
    <div className="my-20 max-w-[80%] mx-auto">
      <div>
        <Row gutter={[20, 20]}>
          {teamData?.map((d, i) => {
            return (
              <Col key={d?.id} lg={8} md={12}>
                <div className="bg-gray-300 flex justify-center">
                  <img className="md:pt-20" src={d?.image} alt="" />
                </div>
                <div>
                  <p className="text-3xl mt-5 font-bold">{d.name}</p>
                  <p className="text-lg">{d.title}</p>
                  <div className="flex gap-3 !text-2xl my-3">
                    <div>{<TwitterOutlined />}</div>
                    <div>{<InstagramOutlined />}</div>
                    <div>{<LinkedinFilled />}</div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default Team;
