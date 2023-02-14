import { css, SerializedStyles } from "@emotion/react";

const styles = {
  default: css`
    padding: 1.25rem 1.625rem;
    width: 100%;
    height: 62px;
    border: 1px solid #c4c4c4;
    border-radius: 2rem;
    font-size: 1rem;

    ::placeholder {
      color: #848484;
    }
  `,

  gray: css`
    padding: 1rem;
    width: 100%;
    background-color: #e5e5e5;
    border: none;
    border-radius: 1rem;
    font-size: 1rem;
  `,

  white: css`
    padding: 1rem;
    width: 100%;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 1rem;
    font-size: 1rem;
  `,
};

export const inputCss: {
  [index: string]: SerializedStyles;
} = {
  default: styles.default,
  gray: styles.gray,
  white: styles.white,
};
