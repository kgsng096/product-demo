import { Layout } from "antd";

import Products from "./components/Products/Products";

function App() {
  const { Header, Content } = Layout;
  return (
    <>
      <Layout>
        <Header
          style={{
            backgroundColor: "#4096ff",
            textAlign: "center",
            alignItems: "center",
            color: "#fff",
            paddingInline: 48,
            fontSize: 24,
            borderRadius: 14,
          }}
        >
          PRODUCTS DEMO
        </Header>
        <br />
        <Content
          style={{
            alignSelf: "center",

            width: "85%",
          }}
        >
          <Products />
        </Content>
      </Layout>
    </>
  );
}

export default App;
