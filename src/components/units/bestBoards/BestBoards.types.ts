import { IQuery } from "../../../commons/types/generated/types";

export interface IBestBoardsUIProps {
  dataBoardsOfTheBest?: Pick<IQuery, "fetchBoardsOfTheBest">;
  onClickMoveToBestBoardDetail: (id: string) => () => void;
  onClickAll: () => void;
}
