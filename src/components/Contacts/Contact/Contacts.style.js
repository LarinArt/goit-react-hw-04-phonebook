import styled from 'styled-components';

export const ContactsButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 10px;
  border: none;
  background-color: ${({ theme }) => theme.colors.secondBgColor};
  color: ${({ theme }) => theme.colors.secondTextColor};
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.colors.mainAnimationHover};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.accentBgColor};
  }
`;

export const Number = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin-left: 15px;
`;

export const Name = styled.p`
  text-transform: capitalize;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;
