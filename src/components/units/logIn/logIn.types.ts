import { ChangeEvent } from "react";

export interface ILoginUIProps {
  emailError: string;
  passwordError: string;
  isEmail: boolean;
  emailMessage: string;
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLogin: (data: any) => Promise<void>;
  // onClickLogin: (data: { email?: string; password?: string }) => Promise<void>;
  onClickSigin: () => void;
}
