import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
  accessTokenState,
  restoreAccessTokenLoadable,
} from "../../../commons/store";

export function useAuth() {
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);
  const accessTokenHasValue = useRecoilValueLoadable(
    restoreAccessTokenLoadable
  );

  useEffect(() => {
    async function Auth() {
      if (!accessToken) {
        accessTokenHasValue.toPromise().then((newAccessToken) => {
          if (!newAccessToken) {
            alert("로그인 후 이용 가능합니다!!!");
            router.push("/logIn");
          }
        });
      }
    }
    Auth();
  }, []);
}
