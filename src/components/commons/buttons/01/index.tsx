import { buttonCss } from "./styles";

interface IProps {
  disabled?: boolean;
  title: string;
  type?: "button" | "submit";
  onClick?: (...args: any) => void;
  style?: {
    [key: string]: string | number;
  };
}

export default function Button01(props: IProps) {
  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      css={[buttonCss.default, buttonCss[props.title], props.style]}
    >
      {props.title}
    </button>
  );
}
