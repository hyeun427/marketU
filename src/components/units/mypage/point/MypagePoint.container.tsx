import { useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import MypagePointUI from "./MypagePoint.presenter";
import { FETCH_USER_LOGGED_IN } from "./MypagePoint.queries";

export default function MypagePoint() {
  const { data: userData } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  return <MypagePointUI userData={userData} />;
}
