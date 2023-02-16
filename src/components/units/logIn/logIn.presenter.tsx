import * as S from "../../../../src/components/units/logIn/logIn.styles";
import { ILoginUIProps } from "./logIn.types";

export default function LogInUI(props: ILoginUIProps) {
  return (
    <S.OutWrapper>
      <S.Wrapper>
        <S.Header>LOGIN</S.Header>
        <S.InputWrapper>
          <S.MainInput
            placeholder="이메일을 입력해주세요."
            type="text"
            onBlur={props.onChangeEmail}
          />
          <S.Error>{props.emailMessage}</S.Error>
          <S.MainInput
            placeholder="비밀번호를 입력해주세요."
            type="password"
            onChange={props.onChangePassword}
          />
          <S.Error>{props.passwordError}</S.Error>
        </S.InputWrapper>

        <S.ButtonWrapper>
          <S.Button onClick={props.onClickLogin}>로그인하기</S.Button>
          <S.SignText>아직 회원이 아니신가요?</S.SignText>
          <S.Button onClick={props.onClickSigin}>회원가입</S.Button>
        </S.ButtonWrapper>
      </S.Wrapper>
    </S.OutWrapper>
  );
}
