import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Wrapper = styled.div`
  max-width: 1400px;
  width: 90%;
  padding: 6.25rem 0;
`;

export const ListTitleContainer = styled.div`
  padding: 2.5rem 0;
`;

export const ListTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
    align-items: center;

    & > div {
      padding-left: 2rem;
    }
  }

  h2 {
    padding-bottom: 10px;
    color: #0c662f;
    font-size: 1.375rem;
    letter-spacing: 0.1em;
  }

  h1 {
    font-size: 2rem;
    letter-spacing: 0.1em;
  }

  @media (max-width: 991px) {
    flex-direction: column;

    & > div {
      padding-bottom: 1rem;

      & > div {
        padding-left: 1rem;
      }
    }
  }
`;

export const ListItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ItemWrapper = styled.article`
  width: calc(100% / 4);
  padding: 1rem;
  cursor: pointer;

  & > div:first-of-type::after {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    border-style: solid;
    border-width: 0 60px 60px 0;
    border-color: #ffc6ce #fff;
    box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
    transition: all ease 0.5s;
  }

  :hover div:first-of-type::after {
    border-width: 0 100px 100px 0;
    border-color: #ffc6ce #fff;
  }

  @media ${breakPoints.tablet} {
    width: calc(100% / 2);
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  padding: 1.5rem;
  border-bottom: 4px solid #000000;
  background-color: #ffc6ce;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1;
  background-color: #e5e5e5;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const NoImage = styled.img`
  padding: 1rem;
  filter: grayscale(1);
`;

export const ContentsWrapper = styled.div`
  padding: 1.5rem;
  background-color: #ffc6ce;

  & > h1 {
    font-size: 1.25rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const ContentsUser = styled.div`
  display: flex;
  padding-top: 10px;

  & > div:first-of-type {
    padding-right: 10px;
  }

  span {
    display: block;

    :first-of-type {
      text-decoration: underline;
    }

    :last-of-type {
      color: #848484;
    }
  }
`;

export const ContentsReact = styled.div`
  display: flex;
  padding-top: 10px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
  }

  & > div:last-of-type {
    img {
      transform: rotate(-180deg);
    }
  }
`;
