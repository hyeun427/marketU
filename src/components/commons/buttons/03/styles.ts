import { css, SerializedStyles } from "@emotion/react";

const styles = {
  default: css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 2rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 1.25rem;
    font-weight: bold;
    letter-spacing: 0.06em;
    cursor: pointer;
    transition: all ease 0.5s;

    :hover {
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.35));
    }
  `,

  dark: css`
    background-color: #000;
    color: #fff;
  `,

  yellow: css`
    background-color: #ffcf07;
    color: #000;
  `,

  darkGreen: css`
    background-color: #0c662f;
    color: #fff;
  `,

  outLineDarkGreen: css`
    background-color: #fff;
    color: #0c662f;
    border: 1px solid #0c662f;
  `,
};

export const buttonCss: {
  [index: string]: SerializedStyles;
} = {
  default: styles.default,
  문의하기: styles.dark,
  수정하기: styles.dark,
  삭제하기: styles.dark,
  상품수정: styles.dark,
  상품삭제: styles.dark,
  답글등록: styles.dark,
  댓글작성: styles.dark,
  댓글수정: styles.dark,
  "찜 하기": styles.outLineDarkGreen,
  구매하기: styles.darkGreen,
};
