import { ChangeEvent } from "react";

export interface ILoginUIProps {
  emailError: string;
  passwordError: string;
  isEmail: boolean;
  emailMessage: string;
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLogin: () => void;
  onClickSigin: () => void;
}
