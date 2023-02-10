import { IQuery } from "../../../../commons/types/generated/types";

export interface IMypagePointUI {
  userData?: Pick<IQuery, "fetchUserLoggedIn">;
}
