/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createJuicyMenu = /* GraphQL */ `
  mutation CreateJuicyMenu(
    $input: CreateJuicyMenuInput!
    $condition: ModelJuicyMenuConditionInput
  ) {
    createJuicyMenu(input: $input, condition: $condition) {
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
export const updateJuicyMenu = /* GraphQL */ `
  mutation UpdateJuicyMenu(
    $input: UpdateJuicyMenuInput!
    $condition: ModelJuicyMenuConditionInput
  ) {
    updateJuicyMenu(input: $input, condition: $condition) {
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
export const deleteJuicyMenu = /* GraphQL */ `
  mutation DeleteJuicyMenu(
    $input: DeleteJuicyMenuInput!
    $condition: ModelJuicyMenuConditionInput
  ) {
    deleteJuicyMenu(input: $input, condition: $condition) {
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
