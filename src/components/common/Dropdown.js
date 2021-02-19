import styled from "styled-components";
import PropTypes from "prop-types";
import { Dropdown as DropdownIcon } from "../../icons";

const Root = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.padding(1.5)}px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 5px;
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
