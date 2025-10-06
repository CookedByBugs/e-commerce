import { Col, Row } from "antd";
import React, { useState } from "react";
import img from "../../../assets/img1.svg";

const initialState = {
  email: "",
  password: "",
};
const SignIn = () => {
  const [state, setState] = useState(initialState);
  const handleChange = (e) =>
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("state", state);
  };

  return (
    <div className="w-[80%] mx-auto ">
      <div className="flex flex-col justify-center items-center min-h-[80vh]">
        <Row gutter={[16, 16]}>
          <Col lg={12} md={12} sm={12} xs={12} className="mx-auto">
            <div className="">
              <img
                src={img}
                alt=""
                className="md:rounded rounded-full w-full"
              />
            </div>
          </Col>
          <Col className="" lg={12} md={12} sm={24} xs={24}>
            <div className="flex flex-col items-center justify-center max-w-[400px] w-full mx-auto h-full">
              <div className="mb-5 w-full">
                <div className="">
                  <h2 className="sm:text-4xl text-3xl my-2">
                    Log in to ShopVerse
                  </h2>
                </div>
                <p>Enter your details below</p>
              </div>
              <input
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="Email"
                className="input-field"
              />
              <input
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="Password"
                className="input-field "
              />
              <div className="text-center my-5">
                <button className="btn-primary" onClick={handleSubmit}>
                  Create Account
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SignIn;
