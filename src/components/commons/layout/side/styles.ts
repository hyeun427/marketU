import styled from "@emotion/styled";

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
  margin: auto;
  font-weight: bold;
  font-size: 20px;
`;

export const LogoImg = styled.img`
  height: 80px;
  object-position: -10px -8px;
`;

export const Menu1 = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #828282;
  cursor: pointer;
  :hover {
    border-bottom: #ffc6ce 3px solid;
  }
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

export const Button1 = styled.button`
  padding-right: 10px;
  background-color: #ffffff;
  border: none;
  cursor: pointer;
  font-weight: bold;
  :hover {
    color: #ff007f;
  }
  font-size: 15px;
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
