import styled from 'styled-components';

export const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.accentBgColor};
  color: ${({ theme }) => theme.colors.secondTextColor};
  margin-right: 5px;
  padding: 15px;
`;
