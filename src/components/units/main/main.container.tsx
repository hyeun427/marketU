import { useRouter } from "next/router";
import MainUI from "./main.presenter";

export default function Main() {
  const router = useRouter();

  const onClickMoveToBoardList = () => {
    router.push("/boards");
  };

  return <MainUI onClickMoveToBoardList={onClickMoveToBoardList} />;
}
