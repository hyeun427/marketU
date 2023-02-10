import { css } from "@emotion/react";
import { breakPoints } from "./media";

export const globalStyles = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "MyFont";
  }

  @font-face {
    font-family: "MyFont";
    src: url(/fonts/NotoSansKR-Regular.otf) format("woff2");
  }

  /* @font-face {
    font-family: "MyHeader";
    src: url(/fonts/BlackHanSans-Regular.woff) format("woff");
  } */

  html {
    width: 100%;
    height: 100%;
    font-size: 16px;
    @media ${breakPoints.tablet} {
      font-size: 14px;
    }
    @media ${breakPoints.mobile} {
      font-size: 12px;
    }
  }

  body {
    max-width: 1920px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    overflow-x: hidden;
  }
`;
