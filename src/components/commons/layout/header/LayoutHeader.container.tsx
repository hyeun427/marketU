import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeader.presenter";

export default function LayoutHeader() {
  const router = useRouter();

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
    router.push("/login");
  };

  return (
    <LayoutHeaderUI
      onClickLogo={onClickLogo}
      onClickMoveToBoardList={onClickMoveToBoardList}
      onClickMoveToMarket={onClickMoveToMarket}
      onClickLogin={onClickLogin}
    />
  );
}
