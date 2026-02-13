import { MenuItem, Select, type SelectChangeEvent } from '@mui/material';
import { MyCustomArrow } from '../../assets/icons/ArrowIcon';
import { useState } from 'react';

export function SelectLanguage() {
  const [lang, setLang] = useState('EN');

  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value);
  };
  return (
    <Select
      value={lang}
      onChange={handleChange}
      variant="standard"
      disableUnderline
      IconComponent={MyCustomArrow}
      sx={{
        color: 'secondary.contrastText',
        '& .MuiSelect-icon': {
          color: 'secondary.contrastText',
          top: 'calc(50% - 12px)',
          right: '-4px',
        },
        '& .MuiSelect-select': {
          paddingRight: '24px !important',
        },
        '& .MuiSelect-iconOpen': {
          transform: 'rotate(180deg)',
          transition: 'transform 0.3s ease',
        },
      }}
    >
      <MenuItem value="EN">EN</MenuItem>
      <MenuItem value="UA">UA</MenuItem>
    </Select>
  );
}
