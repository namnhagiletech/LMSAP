/* eslint-disable @typescript-eslint/no-unused-vars */
import { Layout, theme } from 'antd';
import { useEffect } from 'react';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { LOCAL_STORAGE_KEY } from 'src/constants/LOCAL_STORAGE_KEY';
import { ROUTE_PATH } from 'src/routes/route.constant';
import { getAccessToken } from 'src/store/auth/useAuthStore';
import ParseJwt from 'src/utils/ParseJwt';
import Header from '../Header';
import Navbar from '../Navbar';
import Sidernav from '../Siderbav';

const { Content, Sider } = Layout;

const MainLayout = () => {
  const isLogin = getAccessToken();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const history = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = getAccessToken();

    if (!ParseJwt(token!).firstLogin && location.pathname !== ROUTE_PATH.CHANGE_PASSWORD) {
      localStorage.setItem(LOCAL_STORAGE_KEY.EMAIL_FIRST_LOGIN, ParseJwt(token!).email);
      history(ROUTE_PATH.CHANGE_PASSWORD);
    } else if (ROUTE_PATH.CHANGE_PASSWORD === location.pathname) {
      history(ROUTE_PATH.HOME);
    }
  }, [history, location.pathname]);

  if (!isLogin) return <Navigate to={ROUTE_PATH.LOGIN} replace />;

  return (
    <>
      <Layout
        style={{
          background: colorBgContainer,
          minHeight: '100vh',
          margin: '0 auto',
        }}
      >
        <Header />
        <Layout>
          <Sider
            className='hidden md:block custom-sider-ant'
            style={{ background: colorBgContainer }}
          >
            <Navbar />
          </Sider>
          <Content style={{ background: colorBgContainer }}>
            <Outlet />
          </Content>
        </Layout>
        <Sidernav />
      </Layout>
    </>
  );
};

export default MainLayout;
