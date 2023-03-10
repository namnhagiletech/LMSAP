/* eslint-disable no-template-curly-in-string */
import React, { useState } from 'react';
import { Form, Input, notification, Typography } from 'antd';
import './index.scss';
import { sendCodeEmailMutation } from '../../services/respository/useMutations';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import ButtonCommon from '../../components/ButtonCommon';
const LoginImg = require('../../assets/images/Login/login_imgpc.png');
const LoginImgMobile = require('../../assets/images/Login/login_img01.png');

const { Title, Paragraph } = Typography;

interface ConfirmEmailForm {
  email: string;
}

const validateMessages = {
  required: 'Please input your ${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  },
};

const ConfirmEmail = () => {
  let history = useNavigate();
  const confirmMail: string | null = localStorage.getItem('current_email');

  const [currentEmail, setCurrentEmail] = useState(confirmMail);
  const [sendCodeEmail] = useMutation(sendCodeEmailMutation);

  const onFinish = (values: ConfirmEmailForm) => {
    if (confirmMail === currentEmail) {
      history('/confirm-code');
      return;
    }

    if (confirmMail !== currentEmail && currentEmail !== '') {
      sendCodeEmail({
        variables: {
          data: {
            email: values.email,
          },
        },
      })
        .then((res) => {
          if (res.data.sendCodeResetPassword) {
            localStorage.setItem('current_email', values.email);
            setCurrentEmail(values.email);
            notification.success({
              message: '',
              description: 'Successful',
              placement: 'topRight',
            });
          }
          history('/confirm-code');
        })
        .catch((error) => {
          notification.error({
            message: '',
            description: 'Invalid email',
            placement: 'topRight',
          });
        });
    }
  };

  return (
    <div className='login'>
      <div className='login-form'>
        <Title className='title' level={5}>
          ???????????????????????????
        </Title>
        <Paragraph className='paragraph' style={{ marginBottom: '40px', marginTop: '28px' }}>
          ??????????????????????????????????????? ????????????????????? ?????????????????????????????????????????????????????????
          ????????????????????????????????????
        </Paragraph>
        <Form
          name='basic'
          initialValues={{ remember: true }}
          onFinish={onFinish}
          validateMessages={validateMessages}
          layout='vertical'
        >
          <Form.Item
            name='email'
            style={{ marginBottom: '60px', marginTop: '20px' }}
            rules={[{ required: true, type: 'email' }]}
            initialValue={confirmMail}
          >
            <Input
              onChange={(e) => setCurrentEmail(e.target.value)}
              placeholder='?????????????????????'
              className='login--input'
            />
          </Form.Item>
          <ButtonCommon title='????????????????????????' type='button gradient-pink' />
        </Form>
      </div>
      <div className='login--img fixed bottom-0'>
        <img className='md:block hidden' src={LoginImg} alt='' />
        <img className='md:hidden' src={LoginImgMobile} alt='' />
      </div>
    </div>
  );
};

export default ConfirmEmail;
