"use client"

import { Col, Row } from "antd";
import classes from "./styles.module.css";
import { Card } from "@components/Card/Card";
import { ListingProductCard } from "@components/Card/Card.stories";
import { FiltersAndSorts } from "@components/Filters&Sorts/Filters&Sorts";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FilterTypes,
  FilterTypesEnum,
  SortingTypes,
  SortingTypesEnum,
  defaultFilters,
  defaultSorting,
} from "@components/Filters&Sorts/Types";

const filterRegex = new RegExp(/(filter).+?/);
const sortRegex = new RegExp(/(sort).+?/);

const AllProducts = () => {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState(defaultFilters);
  const [sorts, setSorts] = useState(defaultSorting);

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
    const tempFilters = defaultFilters;
    const tempSorts = defaultSorting;
    for (let filter of urlFilters) {
      let urlFilterKey = Object.keys(filter)[0];
      const filterKeyParts = urlFilterKey.split(".");
      const filterKey = filterKeyParts[2] as FilterTypesEnum;
      tempFilters[filterKey][filterKeyParts[1]] = filter[urlFilterKey];
      // console.log(filterKeyParts, tempFilters);
    }
    for (let sort of urlsorts) {
      let urlSortKey = Object.keys(sort)[0];
      const sortKeyParts = urlSortKey.split(".");
      const sortKey = sortKeyParts[1] as SortingTypesEnum;
      tempSorts[sortKey] = sort[urlSortKey];
      // console.log(sortKeyParts, tempSorts);
    }
    setFilters(tempFilters)
    setSorts(tempSorts)
  }, [searchParams]);

  console.log(filters, sorts)

  return (
    <div className={classes.main}>
      <Row gutter={[64, 64]}>
        <Col lg={6}>
          <FiltersAndSorts
            initialFilters={filters}
            initialSorts={sorts}
            returnFilters={(f: FilterTypes) => setFilters(f)}
            returnSortings={(s: SortingTypes) => setSorts(s)}
          />
        </Col>
        <Col lg={18}>
          <Row>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_: any, i: number) => {
              return (
                <Col key={i}>
                  <Card
                    className={classes.product}
                    {...ListingProductCard.args}
                    onClick={() => {
                      console.log("Clicked:", i);
                    }}
                  />
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default AllProducts;
