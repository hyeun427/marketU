import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardDetailUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  data2?: Pick<IQuery, "fetchUserLoggedIn">;
  onClickMoveToBoardList: () => void;
  onClickMoveToBoardEdit: () => void;
  onClickDeleteBoard: () => void;
  onClickLike: () => void;
  onClickDislike: () => void;
}
