// TODO: Custom dropdown options list
// TODO: Add theme color
import React from "react";
import styled, { keyframes, css } from "styled-components";
import PropTypes from "prop-types";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { Dropdown as DropdownIcon } from "../../icons";

const openAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.95);
  }
  100%  {
    opacity: 1;
    transform: scale(1);
  }
  `;

const closeAnimation = keyframes`
  10%  {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.95);
  }
`;

const animation = ({ open }) =>
  css`
    ${open ? openAnimation : closeAnimation}
  `;

const Root = styled.div`
  position: relative;
  display: inline-block;
  text-align: left;
`;

const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 100%;
  background-color: transparent;
  border-radius: 5px;
  ${({ theme }) => `
    border: ${theme.border};
    padding: ${theme.padding(1)}px ${theme.padding(2)}px   
  `}
`;

const StyledDropdownIcon = styled(DropdownIcon)`
  ${({ theme }) => `
    margin-right: ${theme.padding(0.5)}px;
    margin-left: ${theme.padding(2)}px;
  `}
`;

const OptionsWrapper = styled.div`
  position: absolute;
  right: 0;
  z-index: 1;
  transform-origin: top right;
  min-width: 200px;
  background-color: white;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  animation-name: ${animation};
  animation-duration: 0.1s;
  animation-fill-mode: forwards;
  max-height: 300px;
  overflow-y: auto;
  ${({ theme }) => `
    margin-top: ${theme.padding(1)}px;
  `};
`;

const Option = styled.div`
  ${({ theme }) => `
    padding: ${theme.padding(2)}px ${theme.padding(2)}px;
    ${theme.clickable}
  `}
`;

const Dropdown = ({ options, current, onChange }) => {
  const [open, setOpen] = React.useState(false);
  const [cssDisplay, setCssDisplay] = React.useState("none");

  const toggleOptions = () => {
    if (open) {
      closeOptions();
    } else {
      setOpen(true);
      setCssDisplay("block");
    }
  };

  const closeOptions = () => {
    setOpen(false);
    setTimeout(() => setCssDisplay("none"), 100);
  };

  const onSelect = (value) => () => {
    onChange(value);
    closeOptions();
  };

  return (
    <ClickAwayListener onClickAway={closeOptions}>
      <Root>
        <div>
          <Button onClick={toggleOptions}>
            {current.label}
            <StyledDropdownIcon />
          </Button>
        </div>
        <OptionsWrapper open={open} style={{ display: cssDisplay }}>
          {options.map((option, index) => (
            <Option key={index} onClick={onSelect(option)}>
              {option.label}
            </Option>
          ))}
        </OptionsWrapper>
      </Root>
    </ClickAwayListener>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  current: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func,
};

export { Dropdown };
