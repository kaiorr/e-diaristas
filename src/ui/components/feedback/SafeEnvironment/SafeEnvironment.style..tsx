import { experimentalStyled as styled } from "@material-ui/core/styles";

export const SafeEnvironmentContainer = styled("div")`
  color: ${({ theme }) => theme.palette.text.secondary};
  text-align: right;
  padding: ${({ theme }) => theme.spacing(2)} 0;
  font-size: 12px;

  svg {
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;
