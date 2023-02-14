import { inputCss } from "./styles";
import { UseFormRegisterReturn } from "react-hook-form";

interface IProps {
  type?: "text" | "password" | "number";
  register?: UseFormRegisterReturn;
  placeholder?: string;
  onKeyUp?: (...args: any) => void;
  onChange?: (...args: any) => void;
  style?: {
    [key: string]: string | number;
  };
  title?: string;
  readOnly?: boolean;
}

export default function Input01(props: IProps) {
  return (
    <>
      {props.onChange ? (
        <input
          type={props.type}
          {...props.register}
          placeholder={props.placeholder}
          onKeyUp={props.onKeyUp}
          onChange={props.onChange && props.onChange}
          css={[inputCss[props.title || "default"], props.style]}
          readOnly={props.readOnly || false}
        />
      ) : (
        <input
          type={props.type}
          {...props.register}
          placeholder={props.placeholder}
          onKeyUp={props.onKeyUp}
          css={[inputCss[props.title || "default"], props.style]}
          readOnly={props.readOnly || false}
        />
      )}
    </>
  );
}
