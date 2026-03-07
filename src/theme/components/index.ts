import { buttonOverrides } from './button';
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
  MuiListItemButton: listItemButtonOverrides,
  MuiPaginationItem: paginationOverrides,
  MuiTextField: textFieldOverrides,
  MuiOutlinedInput: outlinedInputOverrides,
  MuiInputLabel: inputLabelOverrides,
  MuiFormHelperText: formHelperTextOverrides,
};
