/* eslint-disable @typescript-eslint/no-unused-vars */
import { Layout, theme } from 'antd';
import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { ROUTE_PATH } from 'src/routes/route.constant';
import { getAccessToken } from 'src/store/auth/useAuthStore';
import Header from '../Header';
import Sidernav from '../Siderbav';

const { Content } = Layout;

const AuthLayout = () => {
  const isLogin = getAccessToken();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  if (isLogin) return <Navigate to={ROUTE_PATH.HOME} replace />;

  return (
    <Suspense fallback={null}>
      <Layout
        style={{
          background: colorBgContainer,
          minHeight: '100vh',
          margin: '0 auto',
        }}
      >
        <Header />
        <Layout>
          <Content style={{ background: colorBgContainer }}>
            <Outlet />
          </Content>
        </Layout>
        <Sidernav />
      </Layout>
    </Suspense>
  );
};

export default AuthLayout;
