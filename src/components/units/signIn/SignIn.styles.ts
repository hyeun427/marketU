import styled from "@emotion/styled";
export const OutWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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

export const InnerWrapper = styled.div`
  margin-bottom: 20px;
`;

export const Title = styled.div``;

export const MainInput = styled.input`
  margin-top: 5px;
  padding-left: 10px;
  height: 64px;
  width: 100%;
  border-radius: 16px;
  border: 1px solid gray;
  :focus {
    outline: 1px solid #ff9f9e;
    border: none;
  }
`;

export const Require = styled.div`
  margin-top: 3px;
  padding-left: 10px;
  font-size: 7px;
  color: gray;
`;
export const Error = styled.div`
  margin-top: 3px;
  padding-left: 10px;
  font-size: 7px;
  color: red;
`;

export const SignInButton = styled.button`
  margin-bottom: 40px;
  width: 100%;
  height: 64px;
  border-radius: 16px;
  cursor: pointer;
  :focus {
    outline: 1px solid #ff9f9e;
    border: none;
  }
`;
