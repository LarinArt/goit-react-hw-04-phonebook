import styled from 'styled-components';

export const MainTitle = styled.h1`
  display: flex;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.mainTextColor};
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const SecondTitle = styled.h2`
  display: flex;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.mainTextColor};
  margin-bottom: 30px;
`;
