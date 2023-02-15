// boards/new
// 게시물 등록페이지

import { useAuth } from "../../../src/components/commons/hooks/useAuth";
import BoardWrite from "../../../src/components/units/board/write/BoardNew.container";

export default function BoardsNewPage() {
  useAuth();
  return <BoardWrite isEdit={false} />;
}
