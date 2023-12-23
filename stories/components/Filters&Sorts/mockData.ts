import { CheckboxValueType } from "antd/es/checkbox/Group";

export const checkboxes = [
  { label: "Edifier", value: "edifier" },
  { label: "Audionic", value: "audionic" },
];

export enum CategoriesEnum {
  BRAND = "brand",
  COLOR = "color",
}

export type CategoriesTypes = {
  [value in CategoriesEnum]: CheckboxValueType[];
};

export const defaultCategories: CategoriesTypes = {
    brand: [],
    color: []
};
