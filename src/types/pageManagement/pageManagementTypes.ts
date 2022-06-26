export interface IPageManagement {
  _id: string;
  domain: string;
  ext: string;
  isActive: boolean;
  name: string;
  primaryStore: boolean;
  storeOwnerId: string;
}

export interface IntPagePlacement {
  isPrimaryMenu: boolean;
  isPageMenu: boolean;
  isInformationMenu: boolean;
  isResourceMenu: boolean;
  isAccountMenu: boolean;
}

export interface IntPage {
  _id: string;
  isActive: boolean;
  name: string;
  placement: IntPagePlacement;
  storefrontId: string;
  text: string;
  url: string;
  storefront?: {
    domain: string;
    name: string;
  };
}

export type TPages = IntPage[];

export type TPageMenuStateKey = keyof IntPagePlacement;

export interface IPageMenuArray {
  name: string;
  stateKey: TPageMenuStateKey;
}

export interface IPageManagementPaginationSorting {
  readonly text: string;
  readonly value: string;
}

export const PageManagementPaginationSorting: readonly IPageManagementPaginationSorting[] =
  [
    {
      text: "Name Asc",
      value: "name-asc"
    },
    { text: "Name Desc", value: "name-desc" },
    { text: "Active Asc", value: "isActive-asc" },
    { text: "Active Desc", value: "isActive-desc" }
  ];

export const PageManagementMenuArr: IPageMenuArray[] = [
  {
    name: "Primary Menu",
    stateKey: "isPrimaryMenu"
  },
  {
    name: "Page Menu",
    stateKey: "isPageMenu"
  },
  {
    name: "Information Menu",
    stateKey: "isInformationMenu"
  },
  {
    name: "Resource Menu",
    stateKey: "isResourceMenu"
  },
  {
    name: "Account Menu",
    stateKey: "isAccountMenu"
  }
];

export enum PageManagementSearchDefaults {
  Order = "asc",
  Page = 1,
  ResultsPerPage = 10,
  SearchTerm = "",
  SortBy = "name"
}
