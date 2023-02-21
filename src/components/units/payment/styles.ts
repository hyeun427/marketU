import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: #fff;
`;

export const CloseButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 0.5rem;
`;

export const Close = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

export const InputWrapper = styled.div`
  padding-bottom: 1rem;

  input {
    width: 100%;
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-size: 1.25rem;
    ::placeholder {
      font-size: 15px;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1rem;

  button {
    max-width: 300px;
  }
`;
