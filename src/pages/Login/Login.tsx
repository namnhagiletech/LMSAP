import React, { useState } from 'react';
import { Form, Input, notification, Spin, Typography } from 'antd';
import './index.scss';
import { Link } from 'react-router-dom';
import { signinMutation } from '../../services/respository/useMutations';
import { useMutation } from '@apollo/client';
import ButtonCommon from '../../components/ButtonCommon';
import ParseJwt from '../../utils/ParseJwt';
import { useAuthStore } from 'src/store/auth/useAuthStore';

const LoginImg = require('../../assets/images/Login/login_imgpc.png');
const LoginImgMobile = require('../../assets/images/Login/login_img01.png');

const { Title, Paragraph } = Typography;

interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const [form] = Form.useForm();
  const [login] = useMutation(signinMutation);
  const [loading, setLoading] = useState(false);

  const { onLogin, onLogout } = useAuthStore();

  const onFinish = (values: LoginForm) => {
    if (!values.email) {
      form.setFields([{ name: 'email', errors: ['Please input your mail!'] }]);
    } else {
      if (!values.password) {
        form.setFields([{ name: 'password', errors: ['Please input your password!'] }]);
      } else {
        setLoading(true);
        login({
          variables: {
            data: {
              email: values.email,
              password: values.password,
            },
          },
        })
          .then((res) => {
            const accessToken = res.data.signIn.accessToken;
            const refreshToken = res.data.signIn.refreshToken;

            if (accessToken) {
              if (ParseJwt(accessToken!).role !== 'STUDENT') {
                onLogout();

                notification.warning({
                  message: '',
                  description: 'Only students can access this site',
                  placement: 'topRight',
                });
              } else {
                onLogin({
                  accessToken,
                  refreshToken,
                });
              }
            }
          })
          .catch((error) => {
            notification.error({
              message: '',
              description: 'Invalid email or password',
              placement: 'topRight',
            });
          })
          .finally(() => {
            setLoading(false);
          });
      }
    }
  };

  return (
    <div className='login'>
      <Spin spinning={loading}>
        <div className='login-form'>
          <Title className='hello' level={4}>
            Hello!
          </Title>
          <Form
            form={form}
            name='basic'
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete='off'
            layout='vertical'
          >
            <Form.Item label='Mail' name='email' style={{ marginBottom: '12px' }}>
              <Input className='login--input' />
            </Form.Item>

            <Form.Item label='Password' name='password' style={{ marginBottom: '0' }}>
              <Input.Password className='login--input' />
            </Form.Item>
            <Form.Item>
              <Paragraph>
                パスワードを忘れた方は{' '}
                <Link className='color-blue-400' to='/confirm-email'>
                  こちら
                </Link>
              </Paragraph>
            </Form.Item>
            <ButtonCommon title='Login' type='button full gradient-pink' />
          </Form>
        </div>
      </Spin>
      <div className='login--img fixed bottom-0'>
        <img className='md:block hidden' src={LoginImg} alt='' />
        <img className='md:hidden' src={LoginImgMobile} alt='' />
      </div>
    </div>
  );
};

export default Login;
