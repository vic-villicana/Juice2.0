/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getJuicyMenu = /* GraphQL */ `
  query GetJuicyMenu($id: ID!) {
    getJuicyMenu(id: $id) {
      id
      menuId
      menuItemId
      dish
      img
      price
      description
      quantity
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listJuicyMenus = /* GraphQL */ `
  query ListJuicyMenus(
    $filter: ModelJuicyMenuFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJuicyMenus(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        menuId
        menuItemId
        dish
        img
        price
        description
        quantity
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
