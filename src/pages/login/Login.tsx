import { SendOutlined } from "@ant-design/icons";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { Button, Col, Form, Input, Row } from "antd";
import chatting from 'assets/bg.jpg';
import ReactFacebookLogin from "react-facebook-login";
import { Link } from "react-router-dom";

const LoginPage = () => {

  const [formLogin] = Form.useForm()

  const handleLoginSuccess = (e: any) => {
    console.log(e);
  }
  const handleFacebookResponse = (e: any) => {
    console.log(e);
  }

  const onFinishLogin = (e: any) => {
    console.log(e);
  }

  return <div className="login-block">
    <div className="block-wrap">
      <Row className="width-100">
        <Col lg={12} sm={24}>
          <div className="block-left">dsdsds
            <img src={chatting} alt="" />
          </div>
        </Col>
        <Col lg={12} sm={24}>
          <Form layout="vertical" form={formLogin} onFinish={onFinishLogin}>
            <Form.Item label="Username" rules={[{ required: true, message: 'Vui lòng nhập email' }]} name="user">
              <Input />
            </Form.Item>
            <Form.Item label="Password" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]} name="password">
              <Input type="password" />
            </Form.Item>
          </Form>
          <div className="text-center mb-2">
            <Button type="primary" icon={<SendOutlined />} onClick={() => formLogin.submit()}>Login</Button>
          </div>

          <div className="text-guide text-center mb-2">
            <div className="mb-2">Nếu chưa có tài khoản hãy</div>
            <Link to="/register">
              <u>Đăng ký</u>
            </Link>
          </div>
          <div className="text-center text-guide mb-2">
            <b>Hoặc</b>
          </div>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <GoogleOAuthProvider
                clientId="871546787699-3k8ad93bj33oad6o2b33t26ilqegk8sd.apps.googleusercontent.com">
                <GoogleLogin
                  text="signin_with"
                  onSuccess={handleLoginSuccess}

                />
              </GoogleOAuthProvider>

            </Col>
            <Col span={12}>
              <ReactFacebookLogin
                appId="1127326401855051"
                autoLoad={false}
                fields="name,email,picture"
                callback={handleFacebookResponse}
                icon="fa-facebook"
                buttonStyle={{
                  minHeight: '40px',
                  width: '100%',
                  fontSize: 14,
                  padding: '10px',
                  border: 'none',
                  borderRadius: 5,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'unset',
                  textDecoration: 'unset',
                  fontWeight: 'unset',
                  textTransform: 'unset'
                }}
                textButton={"Đăng nhập bằng Facebook"}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>

  </div>
};

export default LoginPage;
