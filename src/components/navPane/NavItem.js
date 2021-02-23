import { Collapse } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { DropDown as DropDownIcon, DropUp as DropUpIcon } from "../../icons";

const NavItemRoot = styled.div`
  ${({ theme, open, collapsible }) => `
    border-bottom: ${theme.surface.border};
    padding-bottom: ${collapsible && open ? theme.padding(1.5) : 0}px;
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
  font-size: 0.85rem;
`;

const NavChildWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.85rem;
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

const NavItem = ({ Icon, label, active, children }) => {
  const [open, setOpen] = React.useState(active);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <NavItemRoot open={open} collapsible={!!children}>
      <NavItemWrapper onClick={toggleOpen} open={open}>
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
      {children ? <Collapse in={open}>{children}</Collapse> : null}
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
