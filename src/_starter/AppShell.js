import { React } from "react";
import { LeftNav } from "./Navigation/LeftNav/LeftNav";
import { TopNav } from "./Navigation/TopNav/TopNav";
import { App } from "../App";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export const AppShell = ({ children }) => {
  return (
    <>
      <TopNav />
      <Layout>
        <LeftNav />
        <Container>
          <App />
        </Container>
      </Layout>
    </>
  );
};
