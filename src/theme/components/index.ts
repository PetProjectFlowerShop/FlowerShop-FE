import { buttonOverrides } from './button';
import { radioOverrides } from './Radio';
import { checkboxOverrides } from './Checkbox';
import { formControlLabelOverrides } from './FormControlLabel';
import { listItemButtonOverrides } from './listItemButton';
import { paginationOverrides } from './pagination';
import { dividerOverrides } from './divider';
import { paperOverrides } from './paper';
import { badgeOverrides } from './bage';
import {
  textFieldOverrides,
  outlinedInputOverrides,
  inputLabelOverrides,
  formHelperTextOverrides,
} from './TextField';
import { switchOverrides } from './Switch';
import { sliderOverrides } from './Slider';
import { containerOverrides } from './container';
import { iconButtonOverrides } from './iconButton';
import { cardOverrides } from './card';
import { chipOverrides } from './chip';

export const components = {
  MuiTypography: {
    styleOverrides: {
      root: {
        letterSpacing: 0,
      },
    },
  },
  MuiButton: buttonOverrides,
  MuiIconButton: iconButtonOverrides,
  MuiContainer: containerOverrides,
  MuiFormControlLabel: formControlLabelOverrides,
  MuiRadio: radioOverrides,
  MuiCheckbox: checkboxOverrides,
  MuiListItemButton: listItemButtonOverrides,
  MuiPaginationItem: paginationOverrides,
  MuiDivider: dividerOverrides,
  MuiPaper: paperOverrides,
  MuiBadge: badgeOverrides,
  MuiTextField: textFieldOverrides,
  MuiOutlinedInput: outlinedInputOverrides,
  MuiInputLabel: inputLabelOverrides,
  MuiFormHelperText: formHelperTextOverrides,
  MuiSwitch: switchOverrides,
  MuiSlider: sliderOverrides,
  MuiCard: cardOverrides,
  MuiChip: chipOverrides,
};
