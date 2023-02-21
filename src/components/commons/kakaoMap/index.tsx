// 디테일 페이지 지도

import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { Maybe } from "graphql/jsutils/Maybe";

declare const window: typeof globalThis & {
  kakao: any;
};

const TradeDetail = styled.p`
  padding-top: 0.5rem;
  width: 100%;
  text-align: left;
  font-size: 1.25rem;

  span {
    font-weight: bold;
    box-shadow: inset 0 -1.25rem 0 #ffff00;
  }
`;

export default function KakaoMap(props: {
  tradeLat?: Maybe<number>;
  tradeLng?: Maybe<number>;
  tradeAddress?: Maybe<string>;
  tradeAddressDetail?: Maybe<string>;
}) {
  const container = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading) return;
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=2ecbde04110bd0bbf1d0a040efb1be04&autoload=false&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const options = {
          center: new window.kakao.maps.LatLng(props.tradeLat, props.tradeLng),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container.current, options);
        const imageSrc = "/img/icon/icon_marker.svg";
        const imageSize = new window.kakao.maps.Size(45, 60);

        const markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize
        );
        const markerPosition = new window.kakao.maps.LatLng(
          props.tradeLat,
          props.tradeLng
        );
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage,
        });
        marker.setMap(map);
      });
    };
  }, [loading]);

  useEffect(() => {
    if (props.tradeLat !== undefined && props.tradeLng !== undefined) {
      setLoading(true);
    }
  }, [props.tradeLat, props.tradeLng]);

  return (
    <>
      <TradeDetail>
        <span>
          {props.tradeAddress} {props.tradeAddressDetail}
        </span>
        에서 직거래하길 원해요.
      </TradeDetail>
    </>
  );
}
