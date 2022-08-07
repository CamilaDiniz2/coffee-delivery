import styled from 'styled-components'

export const ProductQuantityAndOrder = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const ProductPrice = styled.div`
  span {
    font-family: 'Baloo 2', cursive;
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 130%;
    color: ${(props) => props.theme['gray-700']};
    margin-left: 0.25rem;
  }
`

export const ProductQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: ${(props) => props.theme['gray-300']};
  border-radius: 8px;
`

export const BasedButtonHome = styled.button`
  border: none;
  padding: 0.5rem;
  background: ${(props) => props.theme['gray-300']};
  cursor: pointer;
  border-radius: 8px;
  line-height: 0;
`

export const ButtonAdd = styled(BasedButtonHome)`
  color: ${(props) => props.theme['purple-900']};

  &:hover {
    background: ${(props) => props.theme['gray-400']};
  }
`

export const ButtonMinus = styled(BasedButtonHome)`
  color: ${(props) => props.theme['purple-900']};

  &:hover {
    background: ${(props) => props.theme['gray-400']};
  }
`

export const ButtonAddToAChart = styled(BasedButtonHome)`
  background: ${(props) => props.theme['purple-600']};
  color: ${(props) => props.theme.white};

  &:hover {
    background: ${(props) => props.theme['purple-900']};
  }
`
