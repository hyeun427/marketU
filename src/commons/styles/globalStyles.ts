import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "MyFont";
  }

  @font-face {
    font-family: "MyFont";
    src: url(/fonts/NotoSansKR-Regular.otf);
  }

  /* @font-face {
    font-family: "MyHeader";
    src: url(/fonts/BlackHanSans-Regular.woff) format("woff");
  } */
`;
