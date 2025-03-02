import * as React from 'react';
import {
  Select as BaseSelect,
  SelectProps,
  selectClasses,
  SelectRootSlotProps,
} from '@mui/base/Select';
import { SelectOption } from '@mui/base/useOption';
import { Option as BaseOption, optionClasses } from '@mui/base/Option';
import { styled } from '@mui/system';
import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';


export function CustomSelect<TValue extends {}>(props: SelectProps<TValue, false>) {
  const slots: SelectProps<TValue, false>['slots'] = {
    root: Button,
    listbox: Listbox,
    popup: Popup,
    ...props.slots,
  };

  return <BaseSelect {...props} slots={slots} />;
}

// ✅ Ensure Option is correctly exported
export const Option = styled(BaseOption)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;

  &.${optionClasses.selected} {
    background-color: ${theme.palette.mode === 'dark' ? '#003A75' : '#DAECFF'};
    color: ${theme.palette.mode === 'dark' ? '#DAECFF' : '#003A75'};
  }

  &:hover {
    background-color: ${theme.palette.mode === 'dark' ? '#434D5B' : '#E5EAF2'};
  }
`
);

const Button = React.forwardRef(function Button<TValue extends {}>(
  props: SelectRootSlotProps<TValue, false>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const { ownerState, ...other } = props;
  return (
    <StyledButton type="button" {...other} ref={ref}>
      {other.children}
      <UnfoldMoreRoundedIcon />
    </StyledButton>
  );
});

const StyledButton = styled('button')(
    ({ theme }) => `
    width: 100%;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 4px 10px;
    border-radius: 8px;
    text-align: left;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }
  
    /* firefox */
    &:focus-visible {
      outline: 0;
    }
  
    & > svg {
      font-size: 1rem;
      position: absolute;
      height: 100%;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
    }
  `
  );

  const Listbox = styled('ul')`
  font-size: 0.875rem;
  min-width: 320px;
  border-radius: 12px;
  overflow-y: auto;
  max-height: 300px;
  background: #fff;
  border: 1px solid #B0B8C4;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;


const Popup = styled('div')`
  z-index: 1;
`;

export { Popup, Listbox };


const blue = {
    100: "#DAECFF",
    200: "#80BFFF",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
  };
  
  const grey = {
    50: "#F3F6F9",
    100: "#E5EAF2",
    200: "#DAE2ED",
    300: "#C7D0DD",
    400: "#B0B8C4",
    500: "#9DA8B7",
    600: "#6B7A90",
    700: "#434D5B",
    800: "#303740",
    900: "#1C2025",
  };
  