import styled from 'styled-components';

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

export const FilterText = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.mainTextColor};
  margin-bottom: 5px;
`;

export const FilterInput = styled.input`
  width: 70%;
  height: 40px;
  padding: 0 10px 0 10px;
  border: 1px solid ${({ theme }) => theme.colors.secondBgColor};
  outline: none;
  color: ${({ theme }) => theme.colors.mainTextColor};
  font-size: ${({ theme }) => theme.fontSize.s};

  &:focus {
    border-color: ${({ theme }) => theme.colors.accentBgColor};
  }

  &::placeholder {
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.colors.mainTextColor};
  }
`;
