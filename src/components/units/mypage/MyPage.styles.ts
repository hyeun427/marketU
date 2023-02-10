import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  width: 100%;
`;

export const Wrapper = styled.div`
  max-width: 1400px;
  width: 90%;
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1500px) {
    flex-direction: column;
  }
`;

export const Contents = styled.div`
  max-width: 1200px;
  width: 100%;
`;
