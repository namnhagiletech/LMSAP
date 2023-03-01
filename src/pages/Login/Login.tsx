import React, { useEffect, useState } from "react";
import { Form, Input, notification, Spin, Typography } from "antd";
import "./index.scss";
import { Link, useNavigate } from "react-router-dom";
import { signinMutation } from "../../services/respository/useMutations";
import { useMutation } from "@apollo/client";
import { LOCAL_STORAGE_KEY } from "../../constants/LOCAL_STORAGE_KEY";
import CheckAuth from "../../utils/CheckAuth";
import ButtonCommon from "../../components/ButtonCommon";
import ParseJwt from "../../utils/ParseJwt";

const LoginImg = require("../../assets/images/Login/login_imgpc.png");
const LoginImgMobile = require("../../assets/images/Login/login_img01.png");

const { Title, Paragraph } = Typography;

interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const [form] = Form.useForm();
  let history = useNavigate();
  const [login] = useMutation(signinMutation);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (CheckAuth()) {
      history("/");
    }
  }, [history]);

  const onFinish = (values: LoginForm) => {
    if (!values.email) {
      console.log("1");
      form.setFields([{ name: "email", errors: ["Please input your mail!"] }]);
    } else {
      console.log("2");
      if (!values.password) {
        form.setFields([
          { name: "password", errors: ["Please input your password!"] },
        ]);
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
              if (ParseJwt(accessToken!).role !== "STUDENT") {
                localStorage.removeItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
                notification.warning({
                  message: "",
                  description: "Only students can access this site",
                  placement: "topRight",
                });
              } else {
                localStorage.setItem(
                  LOCAL_STORAGE_KEY.ACCESS_TOKEN,
                  accessToken
                );
                localStorage.setItem(
                  LOCAL_STORAGE_KEY.REFRESH_TOKEN,
                  refreshToken
                );
                history("/");
              }
            }
          })
          .catch((error) => {
            notification.error({
              message: "",
              description: "Invalid email or password",
              placement: "topRight",
            });
          })
          .finally(() => {
            setLoading(false);
          });
      }
    }
  };

  return (
    <div className="login">
      <Spin spinning={loading}>
        <div className="login-form">
          <Title className="hello" level={4}>
            Hello!
          </Title>
          <Form
            form={form}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item
              label="Mail"
              name="email"
              style={{ marginBottom: "12px" }}
            >
              <Input className="login--input" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              style={{ marginBottom: "0" }}
            >
              <Input.Password className="login--input" />
            </Form.Item>
            <Form.Item>
              <Paragraph>
                パスワードを忘れた方は{" "}
                <Link className="color-blue-400" to="/confirm-email">
                  こちら
                </Link>
              </Paragraph>
            </Form.Item>
            <ButtonCommon title="Login" type="button full gradient-pink" />
          </Form>
        </div>
      </Spin>
      <div className="login--img fixed bottom-0">
        <img className="md:block hidden" src={LoginImg} alt="" />
        <img className="md:hidden" src={LoginImgMobile} alt="" />
      </div>
    </div>
  );
};

export default Login;
