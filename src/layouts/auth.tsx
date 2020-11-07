import React from "react";
import { Layout, Switch } from "antd";
import useDarkMode from "use-dark-mode";
import "../styles/auth.less";

interface Iprops {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: Iprops) {
  const darkMode = useDarkMode(false);
  return (
    <Layout>
      <Switch
        checkedChildren=" ☾ "
        unCheckedChildren=" ☀ "
        defaultChecked
        checked={darkMode.value}
        onChange={darkMode.toggle}
        className="theme-toggle"
      />
      <Layout.Content className="main">{children}</Layout.Content>
    </Layout>
  );
}
