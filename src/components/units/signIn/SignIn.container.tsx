import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import SignInUI from "./SignIn.presenter";
import { CREATE_USER } from "./SignIn.queries";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [emailCheck, setEmailCheck] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [passwordSameCheck, setPasswordSameCheck] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [emailCheckError, setEmailCheckError] = useState("");
  const [passwordCheckError, setPasswordCheckError] = useState("");
  const [passwordSameCheckError, setPasswordSameCheckError] = useState("");

  const [createUser] = useMutation(CREATE_USER);
  const router = useRouter();

  const emailReg = /[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
  const passwordReg =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  // 이메일 입력
  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (event.target.value !== "") {
      setEmailError("");
    }
    if (emailReg.test(email) === true) {
      setEmailCheckError("");
      setEmailCheck(true);
    } else if (emailReg.test(email) === false) {
      setEmailCheckError("이메일 형식이 맞지 않습니다.");
      setEmailCheck(false);
    }
  };

  // 이름 입력
  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    if (event.target.value !== "") {
      setNameError("");
    }
  };

  // 비밀번호 입력
  // const onChangePassword = (event: any) => {
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    let pw1 = (document.getElementById("pw") as HTMLInputElement).value;
    setPassword(pw1);
    if (pw1 !== "") {
      setPasswordError("");
    }
    if (passwordReg.test(password) === true) {
      setPasswordCheckError("");
      setPasswordCheck(true);
    } else if (passwordReg.test(password) === false) {
      setPasswordCheckError("비밀번호 형식이 맞지 않습니다.");
      setEmailCheck(false);
    }
  };

  // 비밀번호 확인칸 입력
  const onChangePasswordCheck = (event: ChangeEvent<HTMLInputElement>) => {
    let pw2 = (document.getElementById("pwcheck") as HTMLInputElement).value;
    if (pw2 === password) {
      setPasswordSameCheckError("");
      setPasswordCheck(true);
    } else if (pw2 !== password) {
      setPasswordSameCheckError("비밀번호가 일치하지 않습니다.");
    }
    if (event.target.value !== "") {
      setPasswordError("");
    }
    if (passwordReg.test(password) === true) {
      setPasswordCheckError("");
      setPasswordCheck(true);
    } else if (passwordReg.test(password) === false) {
      setEmailCheck(false);
    }
  };

  //  버튼 누를 때
  const onClickLogin = async () => {
    if (email === "") {
      setEmailError("이메일은 필수사항입니다");
    }
    if (name === "") {
      setNameError("이름은 필수사항입니다");
    }
    if (password === "") {
      setPasswordError("비밀번호는 필수사항입니다");
    }

    {
      try {
        await createUser({
          variables: {
            createUserInput: {
              email,
              name,
              password,
            },
          },
        });
        router.push("./");
        Modal.success({
          content: "회원 가입이 성공하였습니다.",
        });
      } catch (error) {
        Modal.error({ content: "다시 시도해주세요😥" });
      }
    }
  };

  return (
    <>
      <SignInUI
        emailError={emailError}
        nameError={nameError}
        passwordError={passwordError}
        emailCheckError={emailCheckError}
        passwordCheckError={passwordCheckError}
        passwordSameCheckError={passwordSameCheckError}
        onChangeEmail={onChangeEmail}
        onChangeName={onChangeName}
        onChangePassword={onChangePassword}
        onChangePasswordCheck={onChangePasswordCheck}
        onClickLogin={onClickLogin}
        emailCheck={emailCheck}
        passwordCheck={passwordCheck}
        passwordSameCheck={passwordSameCheck}
      />
    </>
  );
}
