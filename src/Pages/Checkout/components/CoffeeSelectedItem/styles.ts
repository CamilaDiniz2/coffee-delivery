import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme['gray-300']};
  gap: 8px;

  img {
    width: 4rem;
    height: 4rem;
  }
`
export const CoffeeInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  strong {
    color: ${({ theme }) => theme['gray-700']};
    font-weight: normal;
    margin-bottom: 8px;
  }
`
export const CoffeeQuantityAndRemove = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`
export const ProductQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme['gray-300']};
  border-radius: 8px;
`

export const baseButton = styled.button`
  line-height: 0;
  border-radius: 8px;
  padding: 8px;
  background-color: ${({ theme }) => theme['gray-300']};
  color: ${({ theme }) => theme['purple-600']};
  border: 0;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme['purple-900']};
    background-color: ${({ theme }) => theme['gray-400']};
  }
`

export const ButtonAddOrSubtractItem = styled(baseButton)``
export const RemoveItem = styled(baseButton)`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 4px;

  span {
    text-transform: uppercase;
    color: ${({ theme }) => theme['gray-600']};
    font-size: 0.75rem;
  }
`
