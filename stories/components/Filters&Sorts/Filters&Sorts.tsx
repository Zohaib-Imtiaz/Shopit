import {
  SortAscendingOutlined,
  SortDescendingOutlined,
  RiseOutlined,
  FallOutlined,
} from "@ant-design/icons";
import { Row, Col, InputNumber, Button, Typography, Radio, Space } from "antd";
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
const { Title, Text } = Typography;

interface FilterProps {
  initialFilters?: FilterTypes;
  initialSorts?: SortingTypes;
  returnFilters?: Function;
  returnSortings?: Function;
}

export const FiltersAndSorts = ({
  initialFilters,
  initialSorts,
  returnFilters,
  returnSortings,
}: FilterProps) => {
  const [filters, setFilters] = useState(initialFilters ?? defaultFilters);
  const [sortings, setSortings] = useState(initialSorts ?? defaultSorting);

  const applyFilters = () => {
    if (returnFilters instanceof Function) {
      returnFilters(filters);
    }
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

  useEffect(() => {
    setFilters(initialFilters?? defaultFilters)
    setSortings(initialSorts?? defaultSorting)
    console.log(initialFilters, initialSorts)
  }, [initialFilters, initialSorts])

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
            value={filters.price.min}
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
            value={filters.price.max}
            onChange={(value) =>
              updateFilters({
                filter: FilterTypesEnum.PRICE,
                name: RangeFilterEnum.MAX,
                value,
              })
            }
            status={
              filters.price.max_price <= filters.price.min_price &&
              filters.price.max_price !== null
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
      >
        <Radio.Button value={SortingEnum.ASC}>
          <SortAscendingOutlined />
          Asc
        </Radio.Button>
        <Radio.Button value={SortingEnum.DESC}>
          <SortDescendingOutlined /> Desc
        </Radio.Button>
      </Radio.Group>
      {/* <Row gutter={[32, 0]}>
        <Col span={24}>
          <Button
            block
            type="text"
            icon={<SortAscendingOutlined />}
            onClick={(e) => updateFilters(e)}
          >
            Ascending
          </Button>
        </Col>
        <Col span={24}>
          <Button block type="text" icon={<SortDescendingOutlined />}>
            Descending
          </Button>
        </Col>
      </Row> */}
      <Text strong>Price</Text>
      <Radio.Group
        name={SortingTypesEnum.PRICE}
        style={{ width: "100%" }}
        onChange={(e) => updateSortings(e.target)}
      >
        <Radio.Button value={SortingEnum.ASC}>
          <RiseOutlined />
          Low to High
        </Radio.Button>
        <Radio.Button value={SortingEnum.DESC}>
          <FallOutlined />
          High to Low
        </Radio.Button>
      </Radio.Group>

      {/* <Row gutter={[32, 0]}>
        <Col span={24}>
          <Button block type="text" icon={<RiseOutlined />}>
            Low to High
          </Button>
        </Col>
        <Col span={24}>
          <Button block type="text" icon={<FallOutlined />}>
            High to Low
          </Button>
        </Col>
      </Row> */}
    </Space>
  );
};
