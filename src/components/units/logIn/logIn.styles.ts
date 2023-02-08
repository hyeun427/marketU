import styled from "@emotion/styled";

export const OutWrapper = styled.div`
  margin: 100px auto;
`;

export const Wrapper = styled.div`
  width: 400px;
  padding: 20px;
`;

export const Header = styled.div`
  padding-bottom: 40px;
  font-size: 50px;
  font-weight: 500;
  text-align: center;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainInput = styled.input`
  margin-top: 30px;
  padding-left: 10px;
  height: 64px;
  border-radius: 16px;
  border: 1px solid black;
  ::placeholder {
    font-size: 15px;
  }
`;

export const Error = styled.div`
  margin-top: 3px;
  padding-left: 10px;
  height: 13px;
  font-size: 13px;
  color: red;
`;

export const CheckboxWrapper = styled.div`
  margin: 15px 0px 30px;

  display: flex;
  flex-direction: row;
  justify-content: left;
`;

export const Checkbox = styled.input`
  margin-right: 10px;
`;

export const BoxName = styled.div``;

export const LogInButton = styled.button`
  margin-bottom: 40px;
  width: 100%;
  height: 64px;
  border-radius: 16px;
  border: none;
  font-size: medium;
  :hover {
    cursor: pointer;
    background-color: #ffc6ce;
  }
`;

export const Footer = styled.div`
  padding: 29px 50px 0px;

  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const FooterInner = styled.div`
  border: none;
  cursor: pointer;
  :hover {
    color: #ffc6ce;
  }
`;
