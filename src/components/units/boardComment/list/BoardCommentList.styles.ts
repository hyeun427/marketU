import styled from "@emotion/styled";
import { Rate } from "antd";

export const ItemWrapper = styled.div`
  width: 60%;
  margin: 0px auto;
  padding-top: 20px;
  height: 120px;
  border-bottom: 1px solid #bdbdbd;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 10px;
`;

export const Avatar = styled.img`
  width: 30px;
  height: 30px;
`;

export const MainWrapper = styled.div`
  width: 100%;
  padding-left: 10px;
`;

export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 10px;
`;

export const Writer = styled.div`
  font-weight: bold;
`;

export const Star = styled(Rate)`
  padding-left: 10px;
`;

export const Contents = styled.div``;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const UpdateIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 5px;
  cursor: pointer;
`;

export const DeleteIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 5px;
  cursor: pointer;
`;

export const DateString = styled.div`
  color: #bdbdbd;
  padding-top: 15px;
  padding-left: 50px;
  font-size: 13px;
`;

export const PasswordInput = styled.input``;
