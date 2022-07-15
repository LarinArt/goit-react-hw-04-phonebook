import styled from 'styled-components';

export const Form = styled.form`
  margin-bottom: 50px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.mainTextColor};
  margin-bottom: 5px;
`;

export const Input = styled.input`
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
