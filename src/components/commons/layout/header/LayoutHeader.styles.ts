import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: auto;
  height: 80px;
  padding-left: 20px;
  border-bottom: 1px solid #c4c4c4;
  @media ${breakPoints.tablet} {
    height: 70px;
  }

  @media ${breakPoints.mobile} {
    height: 60px;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 26px;
  @media ${breakPoints.tablet} {
    font-size: 23px;
  }

  @media ${breakPoints.mobile} {
    font-size: 16px;
  }
`;

export const Logo = styled.div`
  display: flex;
  cursor: pointer;
`;

export const LogoTitle = styled.div`
  margin: auto;
  font-weight: bold;
`;

export const LogoImg = styled.img`
  height: 90px;
  object-position: -10px -18px;
`;

export const Menu1 = styled.div`
  margin: auto;
  text-align: center;
  margin-right: 30px;
  font-weight: bold;
  color: #828282;
  cursor: pointer;
  :hover {
    border-bottom: #ffc6ce 3px solid;
  }
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  @media ${breakPoints.tablet} {
    font-size: 16px;
  }

  @media ${breakPoints.mobile} {
    font-size: 6px;
  }
`;

export const User = styled.div`
  margin-right: 10px;
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
`;

export const Button = styled.button`
  padding-right: 10px;
  background-color: #ffffff;
  border: none;
  cursor: pointer;
  font-weight: bold;
  :hover {
    color: #ff007f;
  }
`;
