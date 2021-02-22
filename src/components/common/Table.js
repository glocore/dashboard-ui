// TODO: Make table rows scollable
import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableWrapper = styled.div`
  width: 100%;
  max-height: 400px;
  overflow-y: auto;
`;

const Table = ({ children, ...props }) => (
  <TableWrapper>
    <StyledTable {...props} cellPadding={0} cellSpacing={0}>
      {children}
    </StyledTable>
  </TableWrapper>
);

const Tr = styled.tr`
  border-bottom: ${({ theme }) => theme.surface.border};

  tbody & {
    cursor: pointer;
    transition: background-color 0.1s;
  }

  tbody &:hover {
    background-color: #eeeeee;
  }

  tbody &:active {
    background-color: #dddddd;
  }
`;

const Td = styled.td`
  text-align: left;
  padding: ${({ theme }) => `${theme.padding(3)}px ${theme.padding(2)}px`};

  &:first-child {
    padding-left: ${({ theme }) => theme.padding(4)}px;
  }
  &:last-child {
    padding-right: ${({ theme }) => theme.padding(4)}px;
  }
`;

const Th = styled.th`
  text-align: left;
  text-transform: uppercase;
  color: #999;
  font-size: 0.75rem;
  font-weight: 500;
  padding: ${({ theme }) => `${theme.padding(2)}px ${theme.padding(2)}px`};

  &:first-child {
    padding-left: ${({ theme }) => theme.padding(4)}px;
  }
  &:last-child {
    padding-right: ${({ theme }) => theme.padding(4)}px;
  }
`;

export { Table, Tr, Td, Th };
