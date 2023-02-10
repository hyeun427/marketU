import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { getPrice, timeForDay } from "../../../../commons/libraries/utils";
import PagiNation01 from "../../../commons/paginations/01";
import * as S from "./styles";

const FETCH_USEDITEMS_I_BOUGHT = gql`
  query fetchUseditemsIBought($search: String, $page: Int) {
    fetchUseditemsIBought(search: $search, page: $page) {
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

const FETCH_USEDITEMS_COUNT_I_BOUGHT = gql`
  query fetchUseditemsCountIBought {
    fetchUseditemsCountIBought
  }
`;

export default function UseditemsIBought(props: {
  onClickUseditem: (id: string) => () => void;
}) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data: dataUseditemsIBought, refetch } = useQuery(
    FETCH_USEDITEMS_I_BOUGHT,
    {
      variables: { search: "" },
    }
  );

  const { data: dataItemsCountIBought } = useQuery(
    FETCH_USEDITEMS_COUNT_I_BOUGHT
  );

  return (
    <S.Wrapper>
      <S.Title>
        구매한 상품
        <span>{dataItemsCountIBought?.fetchUseditemsCountIBought}</span>
      </S.Title>
      <S.ListItemsWrapper>
        {dataUseditemsIBought?.fetchUseditemsIBought?.map((el: any) => (
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
                  )) || (
                    <S.NoImage
                      src="/img/mark/mark_no_image.svg"
                      alt="NoImage"
                    />
                  )}
                </S.ImageWrapper>
              </S.ImageContainer>

              <S.ContentsWrapper>
                <h1>{el?.name}</h1>
                <S.ContentsUser>
                  <div>
                    <img src="/img/icon/icon_profile_01.svg" alt="" />
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
        totalDataCount={dataItemsCountIBought?.fetchUseditemsCountIBought}
        pageRangeToShow={5}
        dataCountPerPage={10}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        refetch={refetch}
      />
    </S.Wrapper>
  );
}
