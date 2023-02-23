import styled from "@emotion/styled";
import { Rate } from "antd";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  margin: 50px auto;
  @media ${breakPoints.tablet} {
    width: 90%;
  }
  @media ${breakPoints.mobile} {
    width: 60%;
  }
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
  width: 120px;
  height: 30px;
  padding-left: 10px;
  border: 1px solid #bdbdbd;
  margin-right: 10px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    width: 100px;
  }
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
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ContentsLength = styled.div`
  width: 100%;
  height: 30px;
  line-height: 31px;
  padding-left: 10px;
  color: #bdbdbd;
`;
export const Button = styled.button`
  width: 91px;
  height: 30px;
  color: white;
  background-color: #ff5554;
  border: none;
  cursor: pointer;
`;

export const Star = styled(Rate)`
  @media ${breakPoints.tablet} {
    font-size: 18px;
  }
  @media ${breakPoints.mobile} {
    font-size: 15px;
  }
`;
