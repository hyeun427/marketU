import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem 0;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const PageNumberWrapper = styled.div`
  display: flex;
`;

export const PageNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
  cursor: pointer;
  transition: all 0.25s;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 2rem;
  }

  &.isActive {
    cursor: default;

    span {
      color: #e50101;
      text-decoration: underline;
    }
  }
`;

export const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    padding: 0 0.3rem;
    display: ${(props: { disable?: boolean }) =>
      props.disable ? "none" : "block"};

    :hover {
      color: #e50101;
      transform: scale(1.1);
    }
  }
`;
