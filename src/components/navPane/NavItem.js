import styled from "styled-components";
import { DropDown as DropDownIcon, DropUp as DropUpIcon } from "../../icons";

const NavItemRoot = styled.div`
  ${({ theme, open }) => `
    border-bottom: ${theme.surface.border};
    padding-bottom: ${open ? theme.padding(1.5) : 0}px;
    `}
`;

const NavItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ theme }) => `
    padding: ${theme.padding(3)}px;
    ${theme.clickable}
  `}
`;

const NavLabel = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
`;

const NavChildWrapper = styled.div`
  display: flex;
  align-items: center;
  ${({ theme, active }) => `
    color: ${active ? "#1565D8" : "#999999"};
    font-weight: ${active ? 600 : 500};
    padding: ${theme.padding(1.5)}px ${theme.padding(3)}px;
    ${theme.clickable}
  `}
`;

const IconStub = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 12px;
`;

const getLabelIconStyles = (active) => ({
  width: 20,
  height: 20,
  marginRight: 12,
  color: active ? "#1565D8" : "#777777",
});

const arrowIconStyles = {
  height: 20,
  width: 20,
};

const NavItem = ({ Icon, onClick, label, active, open, children }) => {
  return (
    <NavItemRoot open={open}>
      <NavItemWrapper onClick={onClick}>
        <NavLabel>
          <Icon style={getLabelIconStyles(active)} />
          {label}
        </NavLabel>
        {children ? (
          open ? (
            <DropUpIcon style={arrowIconStyles} />
          ) : (
            <DropDownIcon style={arrowIconStyles} />
          )
        ) : null}
      </NavItemWrapper>
      {children}
    </NavItemRoot>
  );
};

const NavChild = ({ active, label }) => (
  <NavChildWrapper active={active}>
    <IconStub />
    {label}
  </NavChildWrapper>
);

export { NavItem, NavChild };
