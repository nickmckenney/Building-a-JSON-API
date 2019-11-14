import React from "react";
import "./App.css";
import Main from "./components/Main.js";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
function App() {
  return (
    <div className="mainPage">
      <Layout>
        <Header className="header-color" title="Government Funding" scroll>
          <Navigation>
            <a href="/">Home</a>
            <a href="http://localhost:4000/AwardSpending">Award Names</a>
            <a href="http://localhost:4000/congress">Congress Funding</a>
            <a href="http://localhost:4000/AwardId">Award Ids</a>
            <a href="http://localhost:4000/state">States</a>
          </Navigation>
        </Header>
        <Drawer title="Government Funding" className="header-color">
          <Navigation>
            <a href="http://localhost:3001/#">Home</a>
            <a href="http://localhost:4000/AwardSpending">Award Names</a>
            <a href="http://localhost:4000/congress">Congress Funding</a>
            <a href="http://localhost:4000/AwardId">Award Ids</a>
            <a href="http://localhost:4000/state">States</a>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
