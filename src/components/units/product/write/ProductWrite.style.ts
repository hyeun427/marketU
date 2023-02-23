import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { breakPoints } from "../../../../commons/styles/media";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const Wrapper = styled.div`
  width: 70vw;
  height: 75vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 50px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    flex-direction: column;
    height: auto;
  }
`;

export const left = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
  border: 1px solid #d9d9d9;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    flex-direction: column;
    width: 100%;
    height: 250px;
  }
`;

export const DeleteBtn = styled.button`
  position: absolute;
  top: 0;
  right: 15px;
  width: 30px;
  border: none;
  background: none;
  color: black;
  font-size: 20px;
  cursor: pointer;
`;

export const right = styled.section`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    margin-top: 10px;
  }
`;

export const Inner = styled.div`
  width: 100%;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
  }
`;

export const Label = styled.h1`
  margin: 0;
  font-weight: 600;
  font-size: 15px;
  @media ${breakPoints.tablet} {
    font-size: 12px;
  }
  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #bdbdbd;
  margin-top: 2px;
  padding-left: 10px;
  outline: none;
  ::placeholder {
    font-size: 12px;
  }
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    height: 30px;
    ::placeholder {
      font-size: 10px;
    }
  }
`;

export const Error = styled.div`
  margin: 2px 0px;
  padding-left: 10px;
  font-size: 11px;
  color: red;
  @media ${breakPoints.tablet} {
    font-size: 7px;
  }
  @media ${breakPoints.mobile} {
    margin-bottom: 10px;
    font-size: 5px;
  }
`;

export const InnerWrapeer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  div {
    width: 49%;
  }
`;

export const Quill = styled(ReactQuill)`
  height: 220px;
  .ql-container {
    height: 180px;
  }
  @media ${breakPoints.tablet} {
    .ql-container {
      height: 160px;
    }
  }
  @media ${breakPoints.mobile} {
    .ql-container {
      height: 158px;
    }
  }
`;

// 태그
export const HashTagWrapper = styled.span`
  padding: 5px 5px 0 0;
`;

export const HashTag = styled.div`
  display: inline-block;
  padding: 0.4rem 1.5rem;
  color: #848484;
  border: 1px solid #848484;
  border-radius: 2rem;
  cursor: pointer;

  :hover {
    color: #fff;
    background-color: #848484;
  }
`;

// 지도
export const MapWrapper = styled.div``;

export const MapDetailWrapperHead = styled.div`
  display: flex;
`;

export const AddressNumber = styled.input`
  width: 70px;
  height: 40px;
  border: 1px solid #bdbdbd;
  padding-left: 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  @media ${breakPoints.tablet} {
    width: 70px;
    height: 35px;
  }
  @media ${breakPoints.mobile} {
    height: 30px;
    margin-bottom: none;
  }
`;

export const AddressSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 86px;
  height: 40px;
  border: 1px solid #bdbdbd;
  font-size: 13px;
  margin-bottom: 10px;
  cursor: pointer;
  @media ${breakPoints.tablet} {
    height: 35px;
    font-size: 12px;
    width: 86px;
  }
  @media ${breakPoints.mobile} {
    height: 30px;
    margin-bottom: none;
    font-size: 12px;
  }
`;

export const MapDetailWrapperBottom = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

// 버튼
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    margin-top: 15px;
  }
`;

export const SubmitButton = styled.button`
  width: 150px;
  height: 40px;
  margin: 30px 15px 0px;
  border: 1px solid #d9d9d9;
  border-radius: 50px;
  background-color: white;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #000000;
  outline: none;
  cursor: pointer;
  :hover {
    background-color: #ff9f9e;
    color: #ffffff;
    transition: all 0.5s;
  }
  @media ${breakPoints.tablet} {
    width: 130px;
    height: 40px;
    font-size: 15px;
  }
  @media ${breakPoints.mobile} {
    width: 110px;
    height: 30px;
    font-size: 10px;
    margin: 10px;
  }
`;
