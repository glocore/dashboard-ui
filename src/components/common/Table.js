import {
  TableCell as MuiTableCell,
  TableRow as MuiTableRow,
} from "@material-ui/core";
import styled from "styled-components";

const TableRow = styled(MuiTableRow)`
  tbody & {
    cursor: pointer;
  }
`;

const TableHeadCell = styled(MuiTableCell)`
  text-transform: uppercase;
  background-color: white;
  color: #999;
  font-size: 0.75rem;
  font-weight: 500;
  &:first-child {
    padding-left: ${({ theme }) => theme.padding(4)}px;
  }
  &:last-child {
    padding-right: ${({ theme }) => theme.padding(4)}px;
  }
`;

const TableCell = styled(MuiTableCell)`
  &:first-child {
    padding-left: ${({ theme }) => theme.padding(4)}px;
  }
  &:last-child {
    padding-right: ${({ theme }) => theme.padding(4)}px;
  }
`;

export { TableRow, TableHeadCell, TableCell };
