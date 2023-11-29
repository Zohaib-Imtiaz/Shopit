export enum SortingTypesEnum {
  DATE = "date",
  PRICE = "price",
}

export enum SortingEnum {
  ASC = "asc",
  DESC = "desc",
}

export type SortingTypes = {
  [value in SortingTypesEnum]: `${SortingEnum}` | undefined;
};

export enum FilterTypesEnum {
  PRICE = "price",
}

export type FilterTypes = {
  [value in FilterTypesEnum]: any;
};

export enum RangeFilterEnum {
  MIN = "min",
  MAX = "max",
}

export type PriceFilter = {
  [value in RangeFilterEnum]: number | null;
};

export const defaultFilters: FilterTypes = {
  price: {
    [RangeFilterEnum.MIN]: 0,
    [RangeFilterEnum.MAX]: null,
  },
};

export const defaultSorting: SortingTypes = {
  date: undefined,
  price: undefined,
};
