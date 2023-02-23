import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
import { ISubmitButtonProps } from "./boardNew.types";

export const Wrapper = styled.div`
  width: 60%;
  border: 1px solid black;
  margin: 100px;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
  @media ${breakPoints.tablet} {
    margin: 70px;
    padding: 50px 30px;
  }
  @media ${breakPoints.mobile} {
    margin: 70px;
    padding: 50px 30px;
  }
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  @media ${breakPoints.tablet} {
    font-size: 28px;
  }
  @media ${breakPoints.mobile} {
    font-size: 20px;
  }
`;

export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
  @media ${breakPoints.tablet} {
    padding-top: 30px;
  }
  @media ${breakPoints.mobile} {
    padding-top: 15px;
  }
`;

export const InputWrapper = styled.div`
  padding-top: 20px;
  width: 100%;
`;

export const Label = styled.div`
  margin: 0;
  padding-bottom: 10px;
  font-weight: 600;
  font-size: 15px;
  @media ${breakPoints.tablet} {
    font-size: 12px;
  }
  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;

export const Writer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 95%;
  height: 40px;
  padding-left: 10px;
  border: 1px solid #bdbdbd;
  margin-top: 2px;
  outline: none;
  @media ${breakPoints.tablet} {
    font-size: 14px;
  }
  @media ${breakPoints.mobile} {
    height: 30px;
    font-size: 12px;
  }
`;

export const Error = styled.div`
  padding-top: 10px;
  padding-left: 10px;
  font-size: 12px;
  color: red;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    font-size: 8px;
  }
`;

export const Password = styled.input`
  width: 100%;
  height: 40px;
  padding-left: 10px;
  border: 1px solid #bdbdbd;
  margin-top: 2px;
  outline: none;
  @media ${breakPoints.tablet} {
    font-size: 14px;
  }
  @media ${breakPoints.mobile} {
    height: 30px;
    font-size: 12px;
    ::placeholder {
      font-size: 10px;
    }
  }
`;

export const Subject = styled.input`
  width: 100%;
  height: 40px;
  padding-left: 10px;
  border: 1px solid #bdbdbd;
  @media ${breakPoints.tablet} {
    font-size: 14px;
  }
  @media ${breakPoints.mobile} {
    height: 30px;
    font-size: 12px;
  }
`;

export const Contents = styled.textarea`
  width: 100%;
  height: 350px;
  padding-left: 10px;
  padding: 14px;
  border: 1px solid #bdbdbd;
  @media ${breakPoints.tablet} {
    font-size: 14px;
    height: 250px;
  }
  @media ${breakPoints.mobile} {
    height: 170px;
    font-size: 12px;
  }
`;

export const CodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Code = styled.input`
  width: 15%;
  height: 40px;
  padding-left: 10px;
  border: 1px solid #bdbdbd;
  @media ${breakPoints.tablet} {
    font-size: 14px;
    width: 25%;
    padding: none;
    ::placeholder {
      font-size: 14px;
    }
  }
  @media ${breakPoints.mobile} {
    width: 25%;
    height: 30px;
    padding: none;
    ::placeholder {
      font-size: 12px;
    }
  }
`;

export const SearchCode = styled.button`
  width: 15%;
  height: 40px;
  margin-left: 16px;
  background-color: black;
  cursor: pointer;
  color: white;
  @media ${breakPoints.tablet} {
    font-size: 12px;
    width: 25%;
    padding: none;
  }
  @media ${breakPoints.mobile} {
    width: 25%;
    height: 30px;
    padding: none;
    font-size: 10px;
  }
`;

export const Address = styled.input`
  width: 100%;
  height: 40px;
  margin-top: 16px;
  padding-left: 10px;
  border: 1px solid #bdbdbd;
  @media ${breakPoints.tablet} {
    font-size: 14px;
    ::placeholder {
      font-size: 14px;
    }
  }
  @media ${breakPoints.mobile} {
    height: 30px;
    font-size: 12px;
    ::placeholder {
      font-size: 12px;
    }
  }
`;

export const Youtube = styled.input`
  width: 100%;
  height: 40px;
  padding-left: 10px;
  border: 1px solid #bdbdbd;
  @media ${breakPoints.tablet} {
    font-size: 14px;
    ::placeholder {
      font-size: 14px;
    }
  }
  @media ${breakPoints.mobile} {
    height: 30px;
    font-size: 12px;
    ::placeholder {
      font-size: 12px;
    }
  }
`;

export const ImagesWrapper = styled.div`
  width: 100%;
  padding-top: 20px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const UploadWrapper = styled.div`
  margin-right: 30px;
  width: 30%;
  height: 200px;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media ${breakPoints.tablet} {
    width: 50%;
  }
  @media ${breakPoints.mobile} {
    width: 70%;
  }
`;

export const DeleteBtn = styled.button`
  position: absolute;
  font-size: 20px;
  font-weight: 600;
  color: black;
  top: 0;
  right: 5px;
  border: none;
  background: none;
  cursor: pointer;
`;

//버튼
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
  background-color: ${(props: ISubmitButtonProps) =>
    props.isActive ? "pink" : "none"};
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

export const CancelButton = styled.button`
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
