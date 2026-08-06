export function FilteredTags() {
  // const { filters, removeParamValue, clearFilters, removeRange } = useProductFilters();
  // const hasActiveFilters = isAnyFilterActive(filters);
  return (
    <>
      {/* {hasActiveFilters && (
        <Box display="flex" flexDirection="column">
          <Box display="flex" flexWrap="wrap" gap="12px" p={likeAccordion ? '16px' : '0px'}>
            {FILTER_CHIP_CONFIG.map((item) => {
              if (item.type === 'multi') {
                return filters[item.key]?.map((value) => (
                  <Chip
                    key={`${item.key}-${value}`}
                    label={item.options.find((o) => o.value === value)?.label}
                    clickable
                    onDelete={() => removeParamValue(item.key, value)}
                  />
                ));
              }

              if (item.type === 'range') {
                const min = filters[item.keyMin];
                const max = filters[item.keyMax];

                if (min == null && max == null) return null;

                return (
                  <Chip
                    key={`${item.keyMin}-${item.keyMax}`}
                    label={item.format(min ?? item.min, max ?? item.max)}
                    clickable
                    onDelete={() => removeRange(item.keyMin, item.keyMax)}
                  />
                );
              }

              return null;
            })}

            {<ButtonText onClick={clearFilters}>Clear All</ButtonText>}
          </Box>
          {likeAccordion && <Divider />}
        </Box>
      )} */}
    </>
  );
}
