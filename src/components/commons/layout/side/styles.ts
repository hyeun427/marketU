import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoTitle = styled.div`
  margin: 0px auto;
  font-size: 25px;
  font-family: "MyHeader";
  @media ${breakPoints.mobile} {
    font-size: 20px;
  }
`;

export const LogoImg = styled.img`
  height: 80px;
  object-position: -10px -8px;
`;

export const Menu1 = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  color: #828282;
  cursor: pointer;
  :hover {
    border-bottom: #ffc6ce 3px solid;
  }
  font-family: "MyHeader";
`;
export const Menu2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
`;
export const Menu3 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 0.5px solid #828282;
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.img`
  width: 32px;
`;

export const Button1 = styled.button`
  padding-top: 6px;
  padding-right: 10px;
  background-color: #ffffff;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  :hover {
    color: #ff5554;
  }
`;

export const User = styled.div`
  margin-right: 10px;
  font-weight: 700;
`;

export const Icon = styled.img`
  width: 32px;
  height: 32px;
`;

export const Count = styled.span`
  margin-right: 10px;
  padding: 4px 0.5rem;
  background: #ffc6ce;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 700;
`;
