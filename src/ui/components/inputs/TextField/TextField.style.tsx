import { experimentalStyled as styled, TextField } from "@material-ui/core";

export const TextFieldStyled = styled(TextField)`
  .MuiInputBase-root {
    background-color: ${({theme}) => theme.palette.grey[50]};
  }

  .MuiOutLinedInput-notchedOutline {
    border-color: ${({theme}) => theme.palette.grey[100]};
  }
`;
