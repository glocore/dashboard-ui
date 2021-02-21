// TODO: Custom dropdown options list
import styled from "styled-components";
import PropTypes from "prop-types";
import { Dropdown as DropdownIcon } from "../../icons";

const Root = styled.div`
  ${({ theme }) => `
    position: relative;
    display: flex;
    align-items: center;
    padding: ${theme.padding(1.2)}px ${theme.padding(1.5)}px;
    border: ${theme.border};
    border-radius: 5px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
  `}
`;

const Select = styled.select`
  appearance: none;
  border: none;
  margin-right: ${({ theme }) => theme.padding(3)}px;
`;

const Option = styled.option`
  background-color: white;
`;

const Dropdown = ({ options, current, onChange }) => {
  return (
    <Root>
      <Select value={current} onChange={onChange}>
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
      <DropdownIcon style={{ position: "absolute", right: 12 }} />
    </Root>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  current: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export { Dropdown };
