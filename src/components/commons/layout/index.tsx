import LayoutHeader from "./header/LayoutHeader.container";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { useRouter } from "next/router";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  return (
    <>
      <LayoutHeader />

      <Body>{props.children}</Body>
    </>
  );
}
