import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  width: 60%;
  margin: 50px auto;
`;

export const PencilIcon = styled.img`
  margin-right: 8px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 15px 0px;
`;
export const Input = styled.input`
  width: 150px;
  height: 40px;
  padding-left: 20px;
  border: 1px solid #bdbdbd;
  margin-right: 10px;
`;
export const ContentsWrapper = styled.div`
  border: 1px solid #bdbdbd;
`;

export const Contents = styled.textarea`
  width: 100%;
  min-height: 108px;
  padding: 20px;
  border: none;
  border-bottom: 1px solid #f2f2f2;
`;
export const BottomWrapper = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ContentsLength = styled.div`
  width: 100%;
  height: 40px;
  line-height: 41px;
  padding-left: 20px;
  color: #bdbdbd;
`;
export const Button = styled.button`
  width: 91px;
  height: 40px;
  color: white;
  background-color: #ff5554;
  border: none;
  cursor: pointer;
`;

export const Star = styled(Rate)``;
