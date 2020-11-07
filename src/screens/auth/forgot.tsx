import React from "react";
import { Button, Card, Col, Form, Input, Row, Select, Typography } from "antd";
import { SettingFilled } from "@ant-design/icons";
import AuthLayout from "../../layouts/auth";
import { AppLogo } from "../../assets/index";
import { Link } from "react-router-dom";
import "./login.less";

export default function ForgotPassword() {
  const onFinish = (values: Object) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: Object) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <AuthLayout>
      <Row className="login-container">
        <Col xs={20} sm={20} md={10} lg={8} xl={8}>
          <Card className="shadow">
            <img src={AppLogo} alt="app logo" className="app-logo" />
            <Typography>
              <Typography.Title level={3}>Forgot Password?</Typography.Title>
              <Typography.Paragraph>Reset your password</Typography.Paragraph>
            </Typography>
            <Form
              name="login"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              layout="vertical"
            >
              <Form.Item
                label=""
                name="email"
                rules={[{ required: true, message: "Please input email!" }]}
              >
                <Input placeholder="Email *" />
              </Form.Item>

              <div className="flex-row">
                <Link to="/login">Already have account?</Link>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </div>
            </Form>
            <br />
            <Link to="/signup">Create an account</Link>
            <br />
          </Card>
          <div className="flex-row mt-1">
            <div>
              <SettingFilled
                style={{ fontSize: "0.9em" }}
                className="text-primary"
              />
              <Select
                bordered={false}
                placeholder="Select Language"
                className="select-lang"
                size="small"
                inputValue=""
              >
                <Select.Option value="english">English</Select.Option>
                <Select.Option value="spanish">Spanish</Select.Option>
                <Select.Option value="hindi">Hindi</Select.Option>
                <Select.Option value="korean">Korean</Select.Option>
                <Select.Option value="german">German</Select.Option>
              </Select>
              <div className="select-divider" />
            </div>
            <ul className="login-footer-nav">
              <li>Help</li>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>
        </Col>
      </Row>
    </AuthLayout>
  );
}
