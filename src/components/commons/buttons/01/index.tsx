import styled from "@emotion/styled";

interface IButtonComponent {
  text: string;
  onClick?: (...args: any) => void;
}

const Button = styled.button`
  width: 80px;
  height: 30px;
  font-size: 14px;
  background-color: white;
  border: 1px solid gray;
  border-radius: 10px;
  margin: 0px 12px;
  cursor: pointer;
  :hover {
    background-color: #ff9f9e;
    border: none;
    transition: ease all 0.5s;
    color: #fff;
  }
`;

export default function Button01(props: IButtonComponent) {
  const { text } = props;
  return <Button onClick={props.onClick}>{text}</Button>;
}
