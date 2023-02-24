import React from "react";
import styled, { css } from "styled-components";
// import { env } from "data/Config";

const MainWrapper = styled.div`
      min-width: 800px;
      margin-top: 80px;
      margin-left: 280px;
      min-height: calc(100vh - 60px);
      align-items: center;
      justify-content: center;
      background: var(--main-bs-white);
      padding: 0px 60px 0px 60px;
`;

// type WrapperProps = {
// 	children: any;
// }

export default function MainContainer({ children }: any) {
  return (
    <React.Fragment>
      <MainWrapper>{children}</MainWrapper>
    </React.Fragment>
  );
}