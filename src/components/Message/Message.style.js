import styled from 'styled-components';

export const MessageText = styled.p`
  display: flex;
  justify-content: center;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: ${({ theme }) => theme.fontSize.xl};
`;
