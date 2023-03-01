import { Form, Input, notification, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import { confirmCodeMutation } from "../../services/respository/useMutations";
import { useMutation } from "@apollo/client";
import ButtonCommon from "../../components/ButtonCommon";
const LoginImg = require("../../assets/images/Login/login_imgpc.png");
const LoginImgMobile = require("../../assets/images/Login/login_img01.png");

const { Title, Paragraph } = Typography;

interface CodeForm {
  email: string;
  confirm_code: string;
}

const ConfirmCode = () => {
  let history = useNavigate();
  const confirmMail = localStorage.getItem("current_email");

  const [confirmCode] = useMutation(confirmCodeMutation);

  const onFinish = (values: CodeForm) => {
    confirmCode({
      variables: {
        data: {
          email: confirmMail,
          code: values.confirm_code,
        },
      },
    })
      .then((res) => {
        if (res.data.validateCode) {
          localStorage.removeItem("current_email");
          notification.success({
            message: "",
            description: "Successful",
            placement: "topRight",
          });
        }
        history("/change-password");
      })
      .catch((error) => {
        notification.error({
          message: "",
          description: "Invalid code",
          placement: "topRight",
        });
      });
  };

  return (
    <div className="login">
      <div className="login-form">
        <Title className="title" level={5}>
          確認コード入力
        </Title>
        <Paragraph
          className="paragraph"
          style={{ marginBottom: "40px", marginTop: "28px" }}
        >
          登録されているメールアドレスに確認コード をお送りしました。
          メールを確認し、 この画面 に数字4桁の認証コードを入力してください。
        </Paragraph>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            name="confirm_code"
            style={{ marginBottom: "60px", marginTop: "20px" }}
            rules={[{ required: true, message: "Please input your code!" }]}
          >
            <Input placeholder="確認コードを入力" className="login--input" />
          </Form.Item>

          <ButtonCommon title="戻る" type="button full gradient-pink mb-5" />

          <ButtonCommon title="次へ" type="button full gradient-gray" />
        </Form>
      </div>
      <div className="login--img fixed bottom-0">
        <img className="md:block hidden" src={LoginImg} alt="" />
        <img className="md:hidden" src={LoginImgMobile} alt="" />
      </div>
    </div>
  );
};

export default ConfirmCode;
