import React from "react";
import { Button, Card, Col, Form, Input, Row, Select, Typography } from "antd";
import { SettingFilled } from "@ant-design/icons";
import AuthLayout from "../../layouts/auth";
import { AppLogo } from "../../assets/index";
import { Link } from "react-router-dom";
import "./login.less";

export default function Signup() {
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
            <Typography.Title level={3}>Sign In</Typography.Title>
            <Form
              name="signup"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              layout="vertical"
            >
              <Form.Item
                name={["user", "name"]}
                label="Name"
                rules={[{ required: true }]}
              >
                <Input placeholder="Your Full Name" />
              </Form.Item>
              <Form.Item
                name={["user", "email"]}
                label="Email"
                rules={[{ type: "email" }]}
              >
                <Input placeholder="Your email " />
              </Form.Item>

              <Form.Item
                name={["user", "gender"]}
                label="Gender"
                required
                initialValue="male"
              >
                <Select>
                  <Select.Option value="male">Male</Select.Option>
                  <Select.Option value="female">Female</Select.Option>
                  <Select.Option value="other">Other</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item name={["user", "introduction"]} label="Introduction">
                <Input.TextArea />
              </Form.Item>

              <div className="flex-row">
                <Link to="/forgot-password">Forgot Password?</Link>
                <Button type="primary" htmlType="submit">
                  Sign In
                </Button>
              </div>
            </Form>
            <br />
            <Link to="Login">Create an account</Link>
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
