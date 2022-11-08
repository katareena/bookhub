import styled from "styled-components";
import { Link } from 'react-router-dom';
import { sideBar } from "../../styles/variables";

export const SideLayout = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.bg};
`;

// export const SHeader = styled.div`
//   width: 100%;
//   height: 65px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding-left: 24px;
//   padding-right: 24px;
//   /* background-color: plum; */
//   background-color: ${({ theme }) => theme.bg};
// `;

// export const SLogo = styled(Link)`
//   display: flex;
//   align-items: center;
//   width: 52px;
//   cursor: pointer;

//   img {
//     max-width: 100%;
//     height: auto;
//   }
// `;

// export const SUser= styled.div`
//   display: flex;
//   align-items: center;
//   width: max-content;
//   height: 30px;
// `;

export const SideMain = styled.main`
  width: 100%;
  padding: calc(${sideBar.smSpacing} * 2);

  h1 {
    font-size: 14px;
  }
`;
