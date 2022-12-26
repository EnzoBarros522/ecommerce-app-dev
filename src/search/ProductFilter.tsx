'use client';

import { Maybe } from '@src/common/CommonTypes';
import PaperTitle from '@src/common/PaperTitle';
import Paper from '@src/common/Paper';
import CheckboxGroup from '@src/forms/CheckboxGroup';
import RadioGroup from '@src/forms/RadioGroup';
import {
  ProductFilterArgs,
  ProductFilterData,
  ProductFilterOptionItem,
  ProductFilterOptions,
} from '@src/products/ProductsTypes';
import { ProductFilterKey } from '@src/products/ProductsUtils';
import { routes } from '@src/routing/routes';
import { useRouter } from 'next/navigation';
import { useProductFilterArgs } from '@src/products/useProductFilterArgs';

type ProductFilterProps = {
  options: Maybe<ProductFilterOptions>;
  values: ProductFilterArgs;
  isDisabled: boolean;
};

function ProductFilter({ options, values, isDisabled }: ProductFilterProps) {
  const router = useRouter();
  const filterArgs = useProductFilterArgs();

  const onChange = (
    filterKey: ProductFilterData['filterKey'],
    newValue: Maybe<string | string[]>,
  ) => {
    router.push(
      routes.search({
        query: {
          ...filterArgs,
          [filterKey]: newValue,
        },
      }),
    );
  };

  if (!options) {
    return null;
  }

  return (
    <>
      {Object.values(options).map((filter) => {
        let filterInput = null;

        switch (filter.filterKey) {
          case ProductFilterKey.CATEGORIES:
          case ProductFilterKey.PRICE_RANGES:
            filterInput = (
              <CheckboxGroup<ProductFilterOptionItem>
                // isLoading={isLoading}
                isDisabled={isDisabled}
                options={filter.options}
                getOptionLabel={(option) => option.title}
                getOptionValue={(option) => option.value}
                value={values[filter.filterKey]}
                onChange={(newValue) => {
                  onChange(filter.filterKey, newValue);
                }}
              />
            );
            break;
          case ProductFilterKey.SORTING:
            filterInput = (
              <RadioGroup<ProductFilterOptionItem>
                // isLoading={isLoading}
                isDisabled={isDisabled}
                options={filter.options}
                getOptionLabel={(option) => option.title}
                getOptionValue={(option) => option.value}
                value={values[filter.filterKey]}
                onChange={(newValue) => {
                  onChange(filter.filterKey, newValue);
                }}
              />
            );
        }

        return (
          <div key={filter.filterKey}>
            <PaperTitle>{filter.title}</PaperTitle>
            <Paper>{filterInput}</Paper>
          </div>
        );
      })}
    </>
  );
}

export default ProductFilter;
