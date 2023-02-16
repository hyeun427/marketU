import { css } from "@emotion/react";
import { breakPoints } from "./media";

export const globalStyles = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "MyFont1";
  }

  /* @font-face {
    font-family: "MyHeader";
    font-style: normal;
    src: url("/fonts/BlackHanSans-Regular.woff") format("woff2");
  } */

  @font-face {
    font-family: "MyFont1";

    src: url("/fonts/HGGGothicssi40g.ttf") format("woff2");
  }

  @font-face {
    font-family: "MyFont2";
    font-style: normal;
    src: url("/fonts/LeeSeoyun.ttf") format("woff2");
  }
  @font-face {
    font-family: "MyFont3";
    font-style: normal;
    src: url("/fonts/SimKyungha.ttf") format("woff2");
  }
  @font-face {
    font-family: "MyHeader";
    font-style: normal;
    src: url("/fonts/Jalnan.ttf") format("woff2");
  }

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
