import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div``;

export const Title = styled.h2`
  padding: 1rem 0;
  border-bottom: 1px solid #e5e5e5;
  font-size: 1.5rem;
  font-weight: 500;

  & > span {
    padding-left: 1rem;
    color: #848484;
  }
`;

export const ListItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 1rem 0;
`;

export const ItemWrapper = styled.div`
  position: relative;
  width: calc(100% / 5);
  padding: 1rem;

  & > div:first-of-type {
    border: 1px solid #000;
    border-radius: 1rem;
    cursor: pointer;
  }

  @media ${breakPoints.tablet} {
    width: calc(100% / 2);
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const ImageContainer = styled.article`
  padding: 1rem;
  border-bottom: 3px solid #000000;
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

export const Image1 = styled.img``;

export const Image2 = styled.img`
  width: 40px;
  height: 40px;
`;
export const Image3 = styled.img`
  width: 35px;
  height: 35px;
`;

export const NoImage = styled.img`
  padding: 1rem;
  filter: grayscale(1);
`;

export const ContentsWrapper = styled.div`
  padding: 1rem;

  & > h1 {
    width: 100%;
    white-space: nowrap;
    font-size: 1.25rem;
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

    :last-of-type {
      margin-top: 3px;
      font-size: 15px;
      color: #848484;
    }
  }
`;

export const ContentsReact = styled.div`
  display: flex;
  padding-top: 10px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      padding-left: 10px;
    }
  }
`;

export const ContentsPrice = styled.p`
  span {
    display: block;
    padding-top: 10px;
    width: 100%;
    min-height: 29px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    :last-of-type {
      color: #848484;
    }
  }
`;
