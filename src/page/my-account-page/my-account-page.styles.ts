import styled from "styled-components";
import { sideBar } from "../../styles/variables";

export const SLayout = styled.div`
  display: flex;
`;

export const SMain = styled.main`
  padding: calc(${sideBar.smSpacing} * 2);
  h1 {
    font-size: 14px;
  }
`;
