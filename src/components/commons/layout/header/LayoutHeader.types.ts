import { IQuery } from "../../../../commons/types/generated/types";

export interface ILayoutHeaderProps {
  onClickLogo: () => void;
  onClickMoveToBoardList: () => void;
  onClickMoveToMarket: () => void;
  onClickLogin: () => void;
  onClickLogout: () => void;
  onClickSignin: () => void;
  onClickMypage: () => void;
  userInfo: {
    email: string;
    name: string;
    // userPoint: number;
    // pickedCount: number;
  };
  accessToken: string;
  dataItemsCountIPicked?: Pick<IQuery, "fetchUseditemsCountIPicked">;
  userData?: Pick<IQuery, "fetchUserLoggedIn">;
}
