import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useCallback, useState } from "react";
import LogInUI from "./logIn.presenter";
import { LOGIN_USER } from "./logIn.queries";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";

export default function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [loginUser] = useMutation(LOGIN_USER);
  const router = useRouter();

  // 이메일 입력, 유효성 검사
  const onChangeEmail = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = event.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("이메일 형식이 틀렸어요! 다시 확인해주세요.");
      setIsEmail(false);
    } else {
      setEmailMessage("");
      setIsEmail(true);
    }
  }, []);

  // 비밀번호 입력
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
  };

  // 로그인 버튼 누를 때
  const onClickLogin = async () => {
    if (email === "") {
      setEmailError("이메일을 입력해주세요");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요");
    }
    if (email !== "" && password !== "") {
      try {
        const result = await loginUser({
          variables: {
            email,
            password,
          },
        });
        const accessToken = result.data.loginUser.accessToken;
        setAccessToken(accessToken);
        // 로그인 후 이동하는 페이지 나중에 주소 바꿔주기
        router.push("./products");
        Modal.success({
          content: "로그인이 성공하였습니다.",
        });
      } catch (error) {
        Modal.error({ content: error.message });
      }
    }
  };

  // 회원가입 버튼 클릭
  const onClickSigin = () => {
    // 회원가입페이지로 주소 바꿔주기
    router.push("./signIn");
  };

  return (
    <>
      <LogInUI
        emailError={emailError}
        passwordError={passwordError}
        onChangeEmail={onChangeEmail}
        emailMessage={emailMessage}
        isEmail={isEmail}
        onChangePassword={onChangePassword}
        onClickLogin={onClickLogin}
        onClickSigin={onClickSigin}
      />
    </>
  );
}
