import { v4 as uuidv4 } from "uuid";
import styled from "@emotion/styled";
import { ISidebar } from "./types";

const Ul = styled.ul`
  padding-top: 4rem;

  @media (max-width: 1500px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;

    li {
      padding: 0 1rem 1rem 0;
    }
  }
`;

const Title = styled.li`
  width: 100%;
  padding-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: bold;

  @media (max-width: 1500px) {
  }
`;

const Li = styled.li`
  padding-bottom: 2rem;
  font-size: 1.5rem;
  color: #848484;
  word-break: keep-all;
  cursor: pointer;

  &.isActive {
    color: #3c96ff;
  }
`;

export default function Sidebar(props: ISidebar) {
  return (
    <Ul>
      <Title>마이페이지</Title>
      {props.sidebarMenus.map((el: any) => (
        <Li
          key={uuidv4()}
          className={el.name === props.activeMenu ? "isActive" : ""}
          onClick={props.onClickSidebarMenu(el.name)}
        >
          {el.name}
        </Li>
      ))}
    </Ul>
  );
}
