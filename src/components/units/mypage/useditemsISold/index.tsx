import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { getPrice, timeForDay } from "../../../../commons/libraries/utils";
import PagiNation01 from "../../../commons/paginations/01";
import * as S from "./styles";

const FETCH_USEDITEMS_I_SOLD = gql`
  query fetchUseditemsISold($search: String, $page: Int) {
    fetchUseditemsISold(search: $search, page: $page) {
      _id
      name
      price
      images
      pickedCount
      seller {
        name
      }
      createdAt
      tags
    }
  }
`;

const FETCH_USEDITEMS_COUNT_I_SOLD = gql`
  query fetchUseditemsCountISold {
    fetchUseditemsCountISold
  }
`;

export default function UseditemsISold(props: {
  onClickUseditem: (id: string) => () => void;
}) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data: dataUseditemsISold, refetch } = useQuery(
    FETCH_USEDITEMS_I_SOLD,
    {
      variables: { search: "" },
    }
  );

  const { data: dataItemsCountISold } = useQuery(FETCH_USEDITEMS_COUNT_I_SOLD);

  return (
    <S.Wrapper>
      <S.Title>
        판매한 상품
        <span>{dataItemsCountISold?.fetchUseditemsCountISold}</span>
      </S.Title>
      <S.ListItemsWrapper>
        {dataUseditemsISold?.fetchUseditemsISold?.map((el: any) => (
          <S.ItemWrapper key={uuidv4()}>
            <div onClick={props.onClickUseditem(el._id)}>
              <S.ImageContainer>
                <S.ImageWrapper>
                  {(el?.images.filter((e: any) => e !== "")[0] && (
                    <img
                      src={`https://storage.googleapis.com/${
                        el.images.filter((e: any) => e !== "")[0]
                      }`}
                    />
                  )) || <S.NoImage src="/img/icon/noImage.png" alt="NoImage" />}
                </S.ImageWrapper>
              </S.ImageContainer>

              <S.ContentsWrapper>
                <h1>{el?.name}</h1>
                <S.ContentsUser>
                  <div>
                    <img
                      src="/img/icon/smile.png"
                      alt=""
                      width="40"
                      height="40"
                    />
                  </div>
                  <div>
                    <span>{el.seller?.name}</span>
                    <span>{timeForDay(el?.createdAt)}</span>
                  </div>
                </S.ContentsUser>
                <S.ContentsReact>
                  <div>
                    <img src="/img/icon/icon_heart.svg" alt="찜" />
                    <span>{el?.pickedCount}</span>
                  </div>
                </S.ContentsReact>
                <S.ContentsPrice>
                  <span>
                    <b>{"₩ " + getPrice(el?.price)}</b>
                  </span>

                  <span>{el.tags}</span>
                </S.ContentsPrice>
              </S.ContentsWrapper>
            </div>
          </S.ItemWrapper>
        ))}
      </S.ListItemsWrapper>
      <PagiNation01
        totalDataCount={dataItemsCountISold?.fetchUseditemsCountISold}
        pageRangeToShow={5}
        dataCountPerPage={10}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        refetch={refetch}
      />
    </S.Wrapper>
  );
}
