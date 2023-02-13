import { css, SerializedStyles } from "@emotion/react";

const styles = {
  default: css`
    width: 100%;
    padding: 1.25rem 0;
    border: none;
    border-radius: 2rem;
    font-size: 1rem;
    cursor: pointer;
  `,

  pink: css`
    background-color: #ffc6ce;
    color: #ffffff;
  `,

  lightGreen: css`
    background-color: #a0d468;
    color: #ffffff;
  `,

  blue: css`
    background-color: #3c96ff;
    color: #ffffff;
  `,

  yellow: css`
    background-color: #ffcf07;
    color: #ffffff;
  `,

  outlineBlue: css`
    background-color: #ffffff;
    color: #3c96ff;
    border: 1px solid #3c96ff;
  `,
};

export const buttonCss: {
  [index: string]: SerializedStyles;
} = {
  default: styles.default,
  로그인: styles.blue,
  가입하기: styles.blue,
  메인으로: styles.blue,
  회원가입: styles.outlineBlue,
  "게시글 작성하기": styles.darkGreen,
  "상품 등록하기": styles.lightGreen,
  충전하기: styles.yellow,
};
