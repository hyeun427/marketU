import Layout from "../../commons/layout";
import LayoutHeader from "../../commons/layout/header/LayoutHeader.container";
import * as S from "./main.style";

export default function MainUI(props) {
  return (
    <S.Wrapper>
      <LayoutHeader>
        <S.Banner>배너입니다</S.Banner>
        <S.Main>
          <S.BestWrapper>
            <S.BestTitleWrapper>
              <S.Title>인기 상품 TOP 4</S.Title>
              <S.All>전체보기</S.All>
            </S.BestTitleWrapper>

            <S.BestContents>
              <S.BestContentsImg>이미지 들어감</S.BestContentsImg>
              <S.WrapperBestContentsSummary>
                <S.BestContentsTitle>
                  삼성전자 갤럭시탭A 10.1
                </S.BestContentsTitle>
                <S.WrapperFlexRow>
                  <S.UserWrapper>
                    <S.UserImg src="/user.png"></S.UserImg>
                    <S.User>조벼리</S.User>
                  </S.UserWrapper>

                  <S.PickWrapper>
                    <S.PickImg />
                    <S.PickCount>20</S.PickCount>
                  </S.PickWrapper>
                </S.WrapperFlexRow>
                <S.Price>240,120원</S.Price>
              </S.WrapperBestContentsSummary>
            </S.BestContents>
          </S.BestWrapper>

          <S.BestWrapper>
            <S.BestTitleWrapper>
              <S.Title>인기 상품 TOP 4</S.Title>
              <S.All>전체보기</S.All>
            </S.BestTitleWrapper>
          </S.BestWrapper>
        </S.Main>
      </LayoutHeader>
    </S.Wrapper>
  );
}
