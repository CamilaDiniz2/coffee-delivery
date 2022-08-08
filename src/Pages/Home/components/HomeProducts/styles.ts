import styled from 'styled-components'

export const HomeProductsSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h2 {
    color: ${(props) => props.theme['gray-700']};
    font-size: 2rem;
    font-weight: 800;
    font-family: 'Baloo 2', cursive;
    line-height: 130%;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
    }
  }
`
export const HomeProductsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 442px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const HomeProductItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 24rem;

  background: ${(props) => props.theme['gray-100']};
  gap: 1rem;
  padding: 1rem;

  img {
    width: 7rem;
    height: 7rem;
    margin-top: -1.5rem;
  }

  strong {
    color: ${(props) => props.theme['gray-700']};
    font-size: 1.25rem;
    font-family: 'Baloo 2', cursive;
    line-height: 130%;
  }

  p {
    color: ${(props) => props.theme['gray-500']};
    line-height: 130%;
    font-size: 0.875rem;
    height: 3rem;
    text-align: center;
  }
`

export const ProductItemFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  h5 {
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    background: ${(props) => props.theme['yellow-300']};
    color: ${(props) => props.theme['yellow-900']};
    font-size: 0.625rem;
    line-height: 130%;
    text-transform: Uppercase;
  }
`

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
