import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import { LOGOUT_USER } from "./LayoutHeader.queries";

export default function LayoutHeader() {
  const router = useRouter();
  const [logoutUser] = useMutation(LOGOUT_USER);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const onClickLogo = () => {
    router.push("/");
  };

  const onClickMoveToBoardList = () => {
    router.push("/boards");
  };

  const onClickMoveToMarket = () => {
    router.push("/products");
  };

  const onClickLogin = () => {
    router.push("/logIn");
  };

  const onClickLogout = () => {
    try {
      logoutUser();
      setAccessToken("");
      alert("로그아웃 하였습니다.");
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickSignin = () => {
    router.push("/signIn");
  };

  const onClickMypage = () => {
    router.push("/mypage");
  };

  return (
    <LayoutHeaderUI
      onClickLogo={onClickLogo}
      onClickMoveToBoardList={onClickMoveToBoardList}
      onClickMoveToMarket={onClickMoveToMarket}
      onClickLogin={onClickLogin}
      onClickLogout={onClickLogout}
      onClickSignin={onClickSignin}
      onClickMypage={onClickMypage}
    />
  );
}
