import { IQuery } from "../../../commons/types/generated/types";

export interface IBestProductsUI {
  dataUseditemsOfTheBest?: Pick<IQuery, "fetchUseditemsOfTheBest">;
  onClickMoveToBestItemDetail: (id: string) => () => void;
  onClickAll: () => void;
}
