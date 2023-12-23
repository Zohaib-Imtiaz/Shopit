import {
  SortAscendingOutlined,
  SortDescendingOutlined,
  RiseOutlined,
  FallOutlined,
} from "@ant-design/icons";
import { Row, Col, InputNumber, Button, Typography, Radio, Space, Checkbox } from "antd";
import { useCallback, useEffect, useState } from "react";
import {
  FilterTypes,
  SortingTypes,
  FilterTypesEnum,
  RangeFilterEnum,
  SortingEnum,
  SortingTypesEnum,
  defaultFilters,
  defaultSorting,
} from "./Types";
import { RadioChangeEventTarget } from "antd/es/radio/interface";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cloneDeep } from "lodash";
import { CategoriesEnum, checkboxes, defaultCategories } from "./mockData";
import { CheckboxValueType } from "antd/es/checkbox/Group";
const { Title, Text } = Typography;

interface FilterProps {
  initialFilters?: FilterTypes;
  initialSorts?: SortingTypes;
  returnFilters?: Function;
  returnSortings?: Function;
}

const filterRegex = new RegExp(/(filter).+?/);
const sortRegex = new RegExp(/(sort).+?/);

export const FiltersAndSorts = ({
  initialFilters,
  initialSorts,
  returnFilters,
  returnSortings,
}: FilterProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [filters, setFilters] = useState(defaultFilters);
  const [sortings, setSortings] = useState(defaultSorting);
  const [categories, setCategories] = useState(defaultCategories);

  const applyFilters = () => {
    if (returnFilters instanceof Function) {
      returnFilters(filters);
    }
    const queryParams = new URLSearchParams(searchParams.toString());

    Object.keys(filters).forEach((filter) => {
      Object.keys(filters[filter as FilterTypesEnum]).forEach((range) => {
        if (filters[filter as FilterTypesEnum][range] !== null) {
          queryParams.set(
            `filter.${range}.${filter}`,
            filters[filter as FilterTypesEnum][range]
          );
        } else {
          queryParams.delete(`filter.${range}.${filter}`);
        }
      });
    });
    replace(`${pathname}?${queryParams.toString()}`);
  };

  const clearFilters = useCallback(() => {
    setFilters(defaultFilters);
    if (returnFilters instanceof Function) {
      returnFilters(defaultFilters);
    }
  }, [returnFilters]);

  interface updateFilterParamObject {
    filter: FilterTypesEnum;
    name: string;
    value: any;
  }
  const updateFilters = (e: updateFilterParamObject) => {
    const temp = { ...filters[e.filter] };
    temp[e.name] = e.value;
    setFilters({ ...filters, [e.filter]: temp });
  };

  const applySortings = () => {
    if (returnSortings instanceof Function) {
      returnSortings(sortings);
    }
    const queryParams = new URLSearchParams(searchParams.toString());
    Object.keys(sortings).forEach((sorting) => {
      console.log(sorting);
      if (sortings[sorting as SortingTypesEnum] !== SortingEnum.NONE) {
        queryParams.set(
          `sort.${sorting}`,
          sortings[sorting as SortingTypesEnum]
        );
      } else {
        queryParams.delete(`sort.${sorting}`);
      }
    });
    replace(`${pathname}?${queryParams.toString()}`);
  };

  const clearSortings = useCallback(() => {
    setSortings(defaultSorting);
    if (returnSortings instanceof Function) {
      returnSortings(defaultSorting);
    }
  }, [returnSortings]);

  const updateSortings = (e: RadioChangeEventTarget) => {
    if (e.name) {
      const temp = { ...sortings };
      temp[e.name as SortingTypesEnum] = e.value;
      setSortings(temp);
    }
  };

  const applyCategories = () => {
    // if (returnSortings instanceof Function) {
    //   returnSortings(sortings);
    // }
    const queryParams = new URLSearchParams(searchParams.toString());
    Object.keys(categories).forEach((category) => {
      console.log(category);
      queryParams.delete(category);

      if (categories[category as CategoriesEnum].length > 0) {
        categories[category as CategoriesEnum].forEach((value: CheckboxValueType) => {
          queryParams.append(
            category,
            value.toString()
          );
        })
      } else {
      }
    });
    replace(`${pathname}?${queryParams.toString()}`);
  };
  
  const clearCategories = useCallback(() => {
    setSortings(defaultSorting);
    if (returnSortings instanceof Function) {
      returnSortings(defaultSorting);
    }
  }, [returnSortings]);

  const updateCategories = (checkedValues: CheckboxValueType[], category: string) => {
    console.log(checkedValues)
    // if (e.name) {
      const temp = { ...categories };
      temp[category as CategoriesEnum] = checkedValues;
      setCategories(temp)
    // }
  };

  useEffect(() => {
    const urlFilters: any = [];
    const urlsorts: any = [];
    searchParams.forEach((value, key) => {
      if (filterRegex.test(key)) {
        urlFilters.push({ [key]: value });
      }
      if (sortRegex.test(key)) {
        urlsorts.push({ [key]: value });
      }
    });
    const tempFilters = cloneDeep(defaultFilters);
    const tempSorts = cloneDeep(defaultSorting);
    for (let filter of urlFilters) {
      let urlFilterKey = Object.keys(filter)[0];
      const filterKeyParts = urlFilterKey.split(".");
      const filterKey = filterKeyParts[2] as FilterTypesEnum;
      console.log(filterKey);
      tempFilters[filterKey][filterKeyParts[1]] = filter[urlFilterKey];
    }
    for (let sort of urlsorts) {
      let urlSortKey = Object.keys(sort)[0];
      const sortKeyParts = urlSortKey.split(".");
      const sortKey = sortKeyParts[1] as SortingTypesEnum;
      tempSorts[sortKey] = sort[urlSortKey];
    }
    console.log(tempFilters);
    setFilters(tempFilters);
    setSortings(tempSorts);
  }, [searchParams]);

  return (
    <Space direction="vertical" size="small">
      <Row gutter={[32, 0]} align={"bottom"}>
        <Col span={16}>
          <Title level={2} style={{ margin: 0 }}>
            Filters
          </Title>
        </Col>
        <Col span={4}>
          <Button size="small" type="text" onClick={clearFilters}>
            Reset
          </Button>
        </Col>
        <Col span={4}>
          <Button size="small" type="text" onClick={applyFilters}>
            Apply
          </Button>
        </Col>
      </Row>
      <Text strong>Price</Text>
      <Row gutter={[16, 0]}>
        <Col span={12}>
          <InputNumber
            name="min_price"
            placeholder="min"
            style={{ width: "150px" }}
            min={0}
            max={100000}
            value={filters.price.min === null ? null : +filters.price.min}
            onChange={(value) =>
              updateFilters({
                filter: FilterTypesEnum.PRICE,
                name: RangeFilterEnum.MIN,
                value,
              })
            }
          />
        </Col>
        <Col span={12}>
          <InputNumber
            name="max_price"
            placeholder="max"
            style={{ width: "150px" }}
            min={1}
            max={100000}
            value={filters.price.max === null ? null : +filters.price.max}
            onChange={(value) =>
              updateFilters({
                filter: FilterTypesEnum.PRICE,
                name: RangeFilterEnum.MAX,
                value,
              })
            }
            status={
              filters.price.max <= filters.price.min &&
              filters.price.max !== null
                ? "error"
                : ""
            }
          />
        </Col>
      </Row>
      <Row gutter={[32, 0]} align={"bottom"}>
        <Col span={16}>
          <Title level={2} style={{ margin: 0 }}>
            Sort
          </Title>
        </Col>
        <Col span={4}>
          <Button size="small" type="text" onClick={clearSortings}>
            Reset
          </Button>
        </Col>
        <Col span={4}>
          <Button size="small" type="text" onClick={applySortings}>
            Apply
          </Button>
        </Col>
      </Row>
      <Text strong>Date</Text>
      <Radio.Group
        name={SortingTypesEnum.DATE}
        style={{ width: "100%" }}
        onChange={(e) => updateSortings(e.target)}
        value={sortings.date}
      >
        <Radio.Button value={SortingEnum.ASC}>
          Oldest
        </Radio.Button>
        <Radio.Button value={SortingEnum.DESC}>
          Latest
        </Radio.Button>
      </Radio.Group>
      <Text strong>Price</Text>
      <Radio.Group
        name={SortingTypesEnum.PRICE}
        style={{ width: "100%" }}
        onChange={(e) => updateSortings(e.target)}
        value={sortings.price}
      >
        <Radio.Button value={SortingEnum.ASC}>
          {/* <RiseOutlined /> */}
          Low to High
        </Radio.Button>
        <Radio.Button value={SortingEnum.DESC}>
          {/* <FallOutlined /> */}
          High to Low
        </Radio.Button>
      </Radio.Group>
      <Row gutter={[32, 0]} align={"bottom"}>
        <Col span={16}>
          <Title level={2} style={{ margin: 0 }}>
            Categories
          </Title>
        </Col>
        <Col span={4}>
          <Button size="small" type="text" onClick={clearCategories}>
            Reset
          </Button>
        </Col>
        <Col span={4}>
          <Button size="small" type="text" onClick={applyCategories}>
            Apply
          </Button>
        </Col>
      </Row>
      <Text strong>Brand</Text>
      <Checkbox.Group options={checkboxes}  style={{ display: "grid" }} onChange={(checkedValues) => updateCategories(checkedValues, CategoriesEnum.BRAND)}/>
      <Text strong>Color</Text>
      <Checkbox.Group options={checkboxes}  style={{ display: "grid" }} onChange={(checkedValues) => updateCategories(checkedValues, CategoriesEnum.COLOR)}/>
    </Space>
  );
};
