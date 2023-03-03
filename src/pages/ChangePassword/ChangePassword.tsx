import { Form, Input, notification, Typography } from 'antd';
import './index.scss';
import { changePasswordMutation } from '../../services/respository/useMutations';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOCAL_STORAGE_KEY } from '../../constants/LOCAL_STORAGE_KEY';
import ButtonCommon from '../../components/ButtonCommon';
const LoginImg = require('../../assets/images/Login/login_imgpc.png') as string;
const LoginImgMobile = require('../../assets/images/Login/login_img01.png') as string;

const { Title, Paragraph } = Typography;

interface ChangePasswordForm {
  email: string;
  new_password: string;
}

const ChangePassword = () => {
  let history = useNavigate();
  let emailStorage: string | null = localStorage.getItem(LOCAL_STORAGE_KEY.EMAIL_FIRST_LOGIN);
  const [changePassword] = useMutation(changePasswordMutation);

  const onFinish = (values: ChangePasswordForm) => {
    changePassword({
      variables: {
        data: {
          email: values.email ? values.email : emailStorage,
          password: values.new_password,
        },
      },
    })
      .then((res) => {
        if (res.data.changePassword) {
          localStorage.removeItem(LOCAL_STORAGE_KEY.EMAIL_FIRST_LOGIN);
          notification.success({
            message: '',
            description: 'Change password successful',
            placement: 'topRight',
          });
        }
        history('/');
      })
      .catch((error) => {
        notification.error({
          message: '',
          description: 'Invalid email',
          placement: 'topRight',
        });
      });
  };

  return (
    <div className='login'>
      <div className='login-form'>
        <Title className='title' level={5}>
          パスワードの変更{' '}
        </Title>
        <Paragraph className='paragraph' style={{ marginBottom: '40px', marginTop: '28px' }}>
          新しいパスワードを入力して再設定します。
          <br />
          半角英数字、 6~14文字で設定してください。
          <br />
          ※特殊文字(&,$,@,...) は使えません。
        </Paragraph>
        <Form
          name='basic'
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete='off'
          layout='vertical'
        >
          {!localStorage.getItem(LOCAL_STORAGE_KEY.EMAIL_FIRST_LOGIN) && (
            <Form.Item
              name='email'
              style={{ marginBottom: '12px' }}
              rules={[{ required: true, message: 'Please input your mail!' }]}
            >
              <Input placeholder='メールアドレス' className='login--input' />
            </Form.Item>
          )}

          <Form.Item
            name='new_password'
            style={{ marginBottom: '48px' }}
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder='新しいメールアドレス' className='login--input' />
          </Form.Item>

          <ButtonCommon title='変更する' type='button full gradient-pink' />
        </Form>
      </div>
      <div className='login--img fixed bottom-0'>
        <img className='md:block hidden' src={LoginImg} alt='' />
        <img className='md:hidden' src={LoginImgMobile} alt='' />
      </div>
    </div>
  );
};

export default ChangePassword;
