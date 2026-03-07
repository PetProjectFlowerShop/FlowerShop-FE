import { buttonOverrides } from './button';
import { radioOverrides } from './Radio';
import { checkboxOverrides } from './Checkbox';
import { formControlLabelOverrides } from './FormControlLabel';
import { listItemButtonOverrides } from './listItemButton';
import { paginationOverrides } from './pagination';
import {
  textFieldOverrides,
  outlinedInputOverrides,
  inputLabelOverrides,
  formHelperTextOverrides,
} from './TextField';

export const components = {
  MuiButton: buttonOverrides,
  MuiFormControlLabel: formControlLabelOverrides,
  MuiRadio: radioOverrides,
  MuiCheckbox: checkboxOverrides,
  MuiListItemButton: listItemButtonOverrides,
  MuiPaginationItem: paginationOverrides,
  MuiTextField: textFieldOverrides,
  MuiOutlinedInput: outlinedInputOverrides,
  MuiInputLabel: inputLabelOverrides,
  MuiFormHelperText: formHelperTextOverrides,
};
