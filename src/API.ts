/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateJuicyMenuInput = {
  id?: string | null,
  menuId: number,
  menuItemId: number,
  dish: string,
  img: string,
  price: number,
  description: string,
  quantity: number,
};

export type ModelJuicyMenuConditionInput = {
  menuId?: ModelIntInput | null,
  menuItemId?: ModelIntInput | null,
  dish?: ModelStringInput | null,
  img?: ModelStringInput | null,
  price?: ModelIntInput | null,
  description?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  and?: Array< ModelJuicyMenuConditionInput | null > | null,
  or?: Array< ModelJuicyMenuConditionInput | null > | null,
  not?: ModelJuicyMenuConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type JuicyMenu = {
  __typename: "JuicyMenu",
  id: string,
  menuId: number,
  menuItemId: number,
  dish: string,
  img: string,
  price: number,
  description: string,
  quantity: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateJuicyMenuInput = {
  id: string,
  menuId?: number | null,
  menuItemId?: number | null,
  dish?: string | null,
  img?: string | null,
  price?: number | null,
  description?: string | null,
  quantity?: number | null,
};

export type DeleteJuicyMenuInput = {
  id: string,
};

export type ModelJuicyMenuFilterInput = {
  id?: ModelIDInput | null,
  menuId?: ModelIntInput | null,
  menuItemId?: ModelIntInput | null,
  dish?: ModelStringInput | null,
  img?: ModelStringInput | null,
  price?: ModelIntInput | null,
  description?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  and?: Array< ModelJuicyMenuFilterInput | null > | null,
  or?: Array< ModelJuicyMenuFilterInput | null > | null,
  not?: ModelJuicyMenuFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelJuicyMenuConnection = {
  __typename: "ModelJuicyMenuConnection",
  items:  Array<JuicyMenu | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionJuicyMenuFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  menuId?: ModelSubscriptionIntInput | null,
  menuItemId?: ModelSubscriptionIntInput | null,
  dish?: ModelSubscriptionStringInput | null,
  img?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionIntInput | null,
  description?: ModelSubscriptionStringInput | null,
  quantity?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionJuicyMenuFilterInput | null > | null,
  or?: Array< ModelSubscriptionJuicyMenuFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateJuicyMenuMutationVariables = {
  input: CreateJuicyMenuInput,
  condition?: ModelJuicyMenuConditionInput | null,
};

export type CreateJuicyMenuMutation = {
  createJuicyMenu?:  {
    __typename: "JuicyMenu",
    id: string,
    menuId: number,
    menuItemId: number,
    dish: string,
    img: string,
    price: number,
    description: string,
    quantity: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateJuicyMenuMutationVariables = {
  input: UpdateJuicyMenuInput,
  condition?: ModelJuicyMenuConditionInput | null,
};

export type UpdateJuicyMenuMutation = {
  updateJuicyMenu?:  {
    __typename: "JuicyMenu",
    id: string,
    menuId: number,
    menuItemId: number,
    dish: string,
    img: string,
    price: number,
    description: string,
    quantity: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteJuicyMenuMutationVariables = {
  input: DeleteJuicyMenuInput,
  condition?: ModelJuicyMenuConditionInput | null,
};

export type DeleteJuicyMenuMutation = {
  deleteJuicyMenu?:  {
    __typename: "JuicyMenu",
    id: string,
    menuId: number,
    menuItemId: number,
    dish: string,
    img: string,
    price: number,
    description: string,
    quantity: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetJuicyMenuQueryVariables = {
  id: string,
};

export type GetJuicyMenuQuery = {
  getJuicyMenu?:  {
    __typename: "JuicyMenu",
    id: string,
    menuId: number,
    menuItemId: number,
    dish: string,
    img: string,
    price: number,
    description: string,
    quantity: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListJuicyMenusQueryVariables = {
  filter?: ModelJuicyMenuFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListJuicyMenusQuery = {
  listJuicyMenus?:  {
    __typename: "ModelJuicyMenuConnection",
    items:  Array< {
      __typename: "JuicyMenu",
      id: string,
      menuId: number,
      menuItemId: number,
      dish: string,
      img: string,
      price: number,
      description: string,
      quantity: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateJuicyMenuSubscriptionVariables = {
  filter?: ModelSubscriptionJuicyMenuFilterInput | null,
};

export type OnCreateJuicyMenuSubscription = {
  onCreateJuicyMenu?:  {
    __typename: "JuicyMenu",
    id: string,
    menuId: number,
    menuItemId: number,
    dish: string,
    img: string,
    price: number,
    description: string,
    quantity: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateJuicyMenuSubscriptionVariables = {
  filter?: ModelSubscriptionJuicyMenuFilterInput | null,
};

export type OnUpdateJuicyMenuSubscription = {
  onUpdateJuicyMenu?:  {
    __typename: "JuicyMenu",
    id: string,
    menuId: number,
    menuItemId: number,
    dish: string,
    img: string,
    price: number,
    description: string,
    quantity: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteJuicyMenuSubscriptionVariables = {
  filter?: ModelSubscriptionJuicyMenuFilterInput | null,
};

export type OnDeleteJuicyMenuSubscription = {
  onDeleteJuicyMenu?:  {
    __typename: "JuicyMenu",
    id: string,
    menuId: number,
    menuItemId: number,
    dish: string,
    img: string,
    price: number,
    description: string,
    quantity: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
