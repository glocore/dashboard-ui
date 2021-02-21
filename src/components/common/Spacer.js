import styled from "styled-components";

const Spacer = styled.div`
  margin-right: ${({ theme, h }) => theme.padding(h)}px;
  margin-bottom: ${({ theme, v }) => theme.padding(v)}px;
`;

export { Spacer };
