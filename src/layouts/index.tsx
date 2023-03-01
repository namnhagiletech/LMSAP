import { Layout, Spin, theme } from "antd";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import CheckAuth from "../utils/CheckAuth";
import Header from "./Header";
import Navbar from "./Navbar";
import Sidernav from "./Siderbav";

const { Sider, Content } = Layout;
const LayoutUser: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [loading, setLoading] = useState(false);

  return (
    <Spin spinning={loading}>
      <Layout
        style={{
          background: colorBgContainer,
          minHeight: "100vh",
          // maxWidth: "2500px",
          margin: "0 auto",
        }}
      >
        <Header logOut={setLoading} />
        <Layout>
          {CheckAuth() && (
            <Sider
              className="hidden md:block custom-sider-ant"
              style={{ background: colorBgContainer }}
            >
              <Navbar />
            </Sider>
          )}
          <Content style={{ background: colorBgContainer }}>
            <Outlet />
          </Content>
        </Layout>
        <Sidernav />
      </Layout>
    </Spin>
  );
};

export default LayoutUser;
