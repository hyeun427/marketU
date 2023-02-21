import styled from "@emotion/styled";
import { ISubmitButtonProps } from "./boardNew.types";

export const Wrapper = styled.div`
  width: 1200px;
  border: 1px solid black;
  margin: 100px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const Title = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 36px;
  font-weight: bold;
`;

export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
`;

export const InputWrapper = styled.div`
  padding-top: 40px;
`;

export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
`;

export const Writer = styled.div`
  width: 486px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;

export const Password = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Subject = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Contents = styled.textarea`
  width: 996px;
  height: 480px;
  padding-left: 16px;
  padding: 14px;
  border: 1px solid #bdbdbd;
`;

export const CodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Code = styled.input`
  width: 77px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const SearchCode = styled.button`
  width: 124px;
  height: 52px;
  margin-left: 16px;
  background-color: black;
  cursor: pointer;
  color: white;
`;

export const Address = styled.input`
  width: 996px;
  height: 52px;
  margin-top: 16px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Youtube = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const ImagesWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const UploadWrapper = styled.div`
  margin-right: 30px;
  width: 30%;
  height: 250px;
  cursor: pointer;
  position: relative;
  div:last-of-type {
    position: absolute;
    top: 0;
    right: 10px;
  }

  &:last-of-type {
    div:last-of-type {
      display: none;
    }
  }
`;

export const DeleteBtn = styled.button`
  font-size: 18px;
  font-weight: 700;
  color: black;
  position: absolute;
  top: 0;
  right: 15px;
  border: none;
  background: none;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;

  background-color: ${(props: ISubmitButtonProps) =>
    props.isActive ? "pink" : "none"};
`;

export const CancelButton = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
  :hover {
    background-color: #ffc6ce;
  }
`;
