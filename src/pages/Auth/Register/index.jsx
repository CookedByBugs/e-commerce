import { Col, Row, Select } from "antd";
import React, { useState } from "react";
import img from "../../../assets/auth.png";
import axios from "axios";
import { Link } from "react-router-dom";

const initialState = {
  fullName: "",
  email: "",
  password: "",
};
const SignUp = () => {
  const [state, setState] = useState(initialState);
  const [role, setRole] = useState("customer");
  const handleChange = (e) =>
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));

  const changeRole = (val) => {
    setRole(val)
    console.log("role", val)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("state", state);

    let { fullName, email, password } = state;
    fullName = fullName.trim();
    email = email.trim().toLowerCase();

    const formData = { fullName, email, password, role: role };
    await axios
      .post(`${import.meta.env.VITE_SERVER}/api/register`, formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="">
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
                  <h2 className="lg:text-5xl sm:text-4xl text-3xl my-2">
                    Create an Account
                  </h2>
                </div>
                <p>Enter your details below</p>
              </div>

              <input
                onChange={handleChange}
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="input-field"
              />
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
              <div className="w-full mt-2">
                <Select
                  className="!w-full"
                  onChange={(val) => changeRole(val)}
                  placeholder="Select Role (Development Only)"
                >
                  <Select.Option value="customer">Customer</Select.Option>
                  <Select.Option value="admin">Admin</Select.Option>
                </Select>
              </div>
              <div className="text-center my-5">
                <button className="btn-primary" onClick={handleSubmit}>
                  Create Account
                </button>
                <p className="my-2">
                  Already have an account?{" "}
                  <Link to="/auth/sign-in">Sign In</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SignUp;
