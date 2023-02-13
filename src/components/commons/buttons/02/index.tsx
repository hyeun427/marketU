import styled from "@emotion/styled";

interface IButtonComponent {
  disabled?: boolean;
  text: string;
  type?: "button" | "submit";
  onClick?: (...args: any) => void;
  style?: {
    [key: string]: string | number;
  };
}

const Button = styled.button`
  background-color: #fff;
  border: 0.1rem solid #ffa7a7;
  padding: 0.3rem;
  border-radius: 0.8rem;
  width: 5rem;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
    transition: all ease 0.5s;
  }
`;

export default function button02(props: IButtonComponent) {
  const { style, text } = props;
  return (
    <Button style={style || {}} onClick={props.onClick}>
      {text}
    </Button>
  );
}
