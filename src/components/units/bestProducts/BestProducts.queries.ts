import { gql } from "@apollo/client";

// 베스트 상품 불러오기 query
export const FETCH_USEDITEMS_OF_THE_BEST = gql`
  query {
    fetchUseditemsOfTheBest {
      _id
      images
      name
      seller {
        name
      }
      createdAt
      pickedCount
      price
      tags
    }
  }
`;
