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
  margin: 10px 0px;
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

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 100%;
  height: 45px;
  font-size: 14px;
  background-color: white;
  border: 1px solid gray;
  border-radius: 15px;
  margin: 5px 0px;
  cursor: pointer;
  :hover {
    background-color: #ff9f9e;
    border: none;
    transition: ease all 0.5s;
    color: #fff;
  }
`;

export const SignText = styled.div`
  width: 100%;
  margin: 10px 0px;
  font-size: 13px;
  color: #bdbdbd;
`;
