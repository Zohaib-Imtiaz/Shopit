export enum SortingTypesEnum {
  DATE = "date",
  PRICE = "price",
}

export enum SortingEnum {
  ASC = "asc",
  DESC = "desc",
  NONE = 'none'
}

export type SortingTypes = {
  [value in SortingTypesEnum]: SortingEnum;
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
    [RangeFilterEnum.MIN]: null,
    [RangeFilterEnum.MAX]: null,
  },
};

export const defaultSorting: SortingTypes = {
  date: SortingEnum.NONE,
  price: SortingEnum.NONE,
};
