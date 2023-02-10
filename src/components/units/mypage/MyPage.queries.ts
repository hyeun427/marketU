import { gql } from "@apollo/client";

export const FETCH_USEDITEMS_I_PICKED = gql`
  query fetchUseditemsIPicked($search: String, $page: Int) {
    fetchUseditemsIPicked(search: $search, page: $page) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      seller {
        name
        picture
      }
      createdAt
    }
  }
`;

export const FETCH_BOARDS_COUNT_OF_MINE = gql`
  query fetchBoardsCountOfMine {
    fetchBoardsCountOfMine
  }
`;

export const FETCH_BOARDS_OF_MINE = gql`
  query fetchBoardsOfMine {
    fetchBoardsOfMine {
      _id
      title
      writer
      images
      createdAt
    }
  }
`;

export const FETCH_USEDITEMS_COUNT_I_PICKED = gql`
  query fetchUseditemsCountIPicked {
    fetchUseditemsCountIPicked
  }
`;

export const FETCH_USEDITEMS_COUNT_I_SOLD = gql`
  query fetchUseditemsCountISold {
    fetchUseditemsCountISold
  }
`;

export const FETCH_USEDITEMS_I_BOUGHT = gql`
  query fetchUseditemsIBought($search: String, $page: Int) {
    fetchUseditemsIBought(search: $search, page: $page) {
      _id
      name
      remarks
      price
      images
      buyer {
        name
      }
      createdAt
    }
  }
`;
