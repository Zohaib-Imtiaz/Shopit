export enum SortingTypesEnum {
    DATE='date',
    PRICE='price',
}

export enum SortingEnum {
    ASC = 'asc',
    DESC = 'desc',
}

export type SortingTypes = {
    [value in SortingTypesEnum]: `${SortingEnum}` | undefined
}

export enum FilterTypesEnum {
    PRICE='price'
}

export type FilterTypes = {
    [value in FilterTypesEnum]: any;
}

export enum PriceFilterEnum {
    MIN = 'min_price',
    MAX = 'max_price'
}

export type PriceFilter = {
    [value in PriceFilterEnum]: number | undefined
}