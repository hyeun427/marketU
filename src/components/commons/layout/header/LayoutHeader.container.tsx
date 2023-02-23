import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState, useRecoilValue } from "recoil";
import { accessTokenState, userInfoState } from "../../../../commons/store";
import { IQuery } from "../../../../commons/types/generated/types";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import {
  FETCH_USEDITEMS_COUNT_I_PICKED,
  FETCH_USER_LOGGED_IN,
  LOGOUT_USER,
} from "./LayoutHeader.queries";

export default function LayoutHeader() {
  const router = useRouter();
  const [logoutUser] = useMutation(LOGOUT_USER);
  // const accessToken = useRecoilValue(accessTokenState);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const { data: dataItemsCountIPicked } = useQuery<
    Pick<IQuery, "fetchUseditemsCountIPicked">
  >(FETCH_USEDITEMS_COUNT_I_PICKED);
  const { data: userData } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

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
      setUserInfo({
        email: "",
        name: "",
      });
      setAccessToken("");
      alert("로그아웃 하였습니다.");
      router.push("/");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
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
      userInfo={userInfo}
      accessToken={accessToken}
      dataItemsCountIPicked={dataItemsCountIPicked}
      userData={userData}
    />
  );
}
