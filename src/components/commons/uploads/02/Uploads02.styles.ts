import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const UploadImage = styled.img`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid #d9d9d9; */

  @media ${breakPoints.tablet} {
    width: 90%;
  }
  @media ${breakPoints.mobile} {
    width: 80%;
  }
`;

export const UploadBtn = styled.button`
  width: 225px;
  height: 61px;
  border: 1px solid #d9d9d9;
  background: white;
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  line-height: 61px;
  outline: none;
  cursor: pointer;
  :hover {
    background: #ff9f9e;
    color: white;
    transition: all 0.5s;
  }
`;

export const UploadFileHidden = styled.input`
  display: none;
`;
