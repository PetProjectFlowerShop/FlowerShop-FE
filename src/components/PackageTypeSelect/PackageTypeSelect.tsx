// import { useState } from 'react';
// import type { PackagingKeyType } from '@/types/product';
// import { PRODUCT_WRAP_OPTIONS } from '@/constants/productWrap';
// import { CustomSelect } from '@/components/common/CustomSelect';
// import { type SelectChangeEvent } from '@mui/material';

// export function PackageTypeSelect() {
//   const [packageType, setPackageType] = useState<PackagingKeyType>('craft');

//   const options = (Object.keys(PRODUCT_WRAP_OPTIONS) as PackagingKeyType[]).map((key) => ({
//     value: key,
//     label: PRODUCT_WRAP_OPTIONS[key],
//   }));

//   const handleChange = (event: SelectChangeEvent) => {
//     const value = event.target.value as PackagingKeyType;
//     setPackageType(value);
//   };

//   return (
//     <CustomSelect value={packageType} options={options} onChange={handleChange} size="small" />
//   );
// }
