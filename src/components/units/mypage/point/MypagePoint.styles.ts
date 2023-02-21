import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  background: #faf9f9;
  border-radius: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Modal = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 3;
  width: 100vw;
  height: 100vh;

  & > div {
    position: fixed;
    top: 50%;
    left: 50%;
    max-width: 800px;
    width: 90%;
    transform: translate(-50%, -50%);
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  padding-right: 2rem;
  border-right: 1px solid #c4c4c4;

  & > span {
    padding: 0 1rem;
    word-break: keep-all;
  }

  @media (max-width: 600px) {
    justify-content: center;
    width: 100%;
    padding-bottom: 1rem;
    border-right: 0;
    border-bottom: 1px solid #c4c4c4;
  }
`;

export const Image1 = styled.img`
  width: 40px;
  height: 40px;
`;

export const Image2 = styled.img`
  width: 35px;
  height: 38px;
  margin-right: 10px;
`;

export const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 2rem;

  & > div:first-of-type {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 2rem;

    span {
      :first-of-type {
        font-weight: bold;
        color: #3c96ff;
      }
    }
  }
`;

export const ButtonWrapper = styled.div``;
