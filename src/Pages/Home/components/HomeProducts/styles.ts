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
  max-width: 22rem;

  background: ${(props) => props.theme['gray-100']};
  gap: 1rem;
  padding: 0.5rem;

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
