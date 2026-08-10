// type Props = {
//   showTags?: boolean;
//   setIsFilterOpen?: React.Dispatch<React.SetStateAction<boolean>>;
//   defaultExpanded?: boolean;
// };

export function FilterContent() {
  // const { filters, toggleParam, setRange } = useProductFilters();
  return (
    <>
      {/* <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        py={2}
        px={4}
        pl={{ desktop: 0 }}
      >
        <Typography variant="h4">Filters</Typography>
        <IconButton
          sx={{ width: 40, height: 40, display: { desktop: 'none' } }}
          variant="default"
          onClick={() => setIsFilterOpen?.(false)}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: 306,
          width: '100%',
        }}
      >
        <Box
          sx={{
            pr: 1,
            display: 'flex',
            flexDirection: 'column',
            mt: 2,
            gap: 6,
            minWidth: 0,
            overflowX: 'hidden',
            height: '100%',
          }}
        >
          {showTags && <FilteredTags likeAccordion />}
          <FilterRenderer
            config={FILTER_CONFIG}
            filters={filters}
            toggleParam={toggleParam}
            setRange={setRange}
            defaultExpanded={defaultExpanded}
          />
        </Box>
      </Box> */}
    </>
  );
}
