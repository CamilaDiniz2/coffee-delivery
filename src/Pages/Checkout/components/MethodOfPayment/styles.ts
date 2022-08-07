import styled from 'styled-components'

interface ButtonPaymentProps {
  isSelected: boolean
}

export const ButtonPaymentType = styled.button<ButtonPaymentProps>`
  width: 32%;
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  align-items: center;
  padding: 16px 8px;
  line-height: 0;

  border-radius: 6px;
  border: 0;

  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme, isSelected }) =>
    isSelected ? theme['purple-600'] : theme['gray-300']};

  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme['purple-300'] : theme['gray-200']};

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  &:hover {
    background-color: ${(props) => props.theme['gray-400']};
  }

  span {
    color: ${(props) => props.theme['gray-600']};
    text-transform: uppercase;
    font-size: 0.6rem;
    font-weight: bold;
  }
`

export const CoffeesSelectedContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.125rem;
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    line-height: 130%;
    margin-bottom: 1rem;
  }
`

export const CoffesSelectedInfo = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['gray-100']};
  padding: 2.5rem;
`

export const CoffesSelectedItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['gray-300']};
  margin-bottom: 1.5rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  p {
    line-height: 130%;
    color: ${(props) => props.theme['gray-700']};
  }
`
export const CoffeeAddOrRemove = styled.div`
  display: flex;
  gap: 0.5rem;
`
export const CoffeesSelectedTotal = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;
  }

  button {
    margin-top: 1rem;
    border: 0;
    background: ${(props) => props.theme['yellow-600']};
    color: ${(props) => props.theme.white};
    border-radius: 8px;
    padding: 0.75rem 0.5rem;

    text-transform: uppercase;
    font-size: 0.875rem;
    line-height: 160%;
    font-weight: 700;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme['yellow-900']};
    }
  }
`
export const RemoveItem = styled.button`
  border: 0;
  display: flex;
  align-items: center;

  color: ${(props) => props.theme['purple-600']};
  background: ${(props) => props.theme['gray-300']};
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 6px;

  &:hover {
    background: ${(props) => props.theme['gray-400']};
  }

  span {
    color: ${(props) => props.theme['gray-600']};
    font-size: 0.75rem;
    text-transform: uppercase;
    font-weight: bold;
  }
`
