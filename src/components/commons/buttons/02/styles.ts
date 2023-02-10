import { css, SerializedStyles } from "@emotion/react";

const styles = {
  default: css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.25rem 2rem;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 0.06em;
    cursor: pointer;
  `,

  outlineWhiteArrow: css`
    max-width: 242px;
    width: 100%;
    background-color: #fff;
    border: 3px solid #000000;
    transition: all ease 0.5s;

    ::after {
      content: url("/img/icon/icon_arrow_right.svg");
      padding-left: 10px;
      max-height: 32px;
    }

    :hover {
      filter: drop-shadow(0px 4px 13px rgba(0, 0, 0, 0.35));
    }
  `,

  outlineWhite: css`
    max-width: 242px;
    width: 100%;
    background-color: #fff;
    border: 3px solid #000000;
    transition: all ease 0.5s;

    :hover {
      filter: drop-shadow(0px 4px 13px rgba(0, 0, 0, 0.35));
    }
  `,

  yellow: css`
    max-width: 242px;
    width: 100%;
    background-color: #ffcf07;
    border: none;
    box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.35);
    color: #000;
    transition: all ease 0.5s;

    :hover {
      filter: drop-shadow(0px 4px 13px rgba(0, 0, 0, 0.35));
    }
  `,

  darkGreen: css`
    max-width: 242px;
    width: 100%;
    background-color: #0c662f;
    border: none;
    box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.35);
    color: #fff;
    transition: all ease 0.5s;

    :hover {
      filter: drop-shadow(0px 4px 13px rgba(0, 0, 0, 0.35));
    }
  `,

  outlineWhiteFit: css`
    background-color: #fff;
    border: 3px solid #000000;
    transition: all ease 0.5s;

    :hover {
      filter: drop-shadow(0px 4px 13px rgba(0, 0, 0, 0.35));
    }
  `,
};

export const buttonCss: {
  [index: string]: SerializedStyles;
} = {
  default: styles.default,
  전체보기: styles.outlineWhiteArrow,
  "게시글 작성하기": styles.outlineWhite,
  "상품 등록하기": styles.outlineWhite,
  수정하기: styles.outlineWhiteFit,
  삭제하기: styles.outlineWhiteFit,
  뒤로가기: styles.outlineWhiteFit,
};
