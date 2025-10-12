import React from "react";
import Sider from "./components/Sider";
import { useTabContext } from "../../../contexts/Tab/TabContext";
import Index from "./Pages/Routes";
import Header from "./components/Header";

const Admin = () => {
  const { setIsSiderOpen, isSiderOpen } = useTabContext();
  return (
    <main>
      <Sider />
      <Header />
      <div onClick={()=>setIsSiderOpen(false)}>
        <Index />
      </div>
    </main>
  );
};

export default Admin;
