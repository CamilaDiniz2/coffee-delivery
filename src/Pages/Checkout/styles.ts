import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  margin-top: 2.5rem;
  width: 100%;

  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    @media (max-width: 870px) {
      display: flex;
      flex-direction: column-reverse;
    }

    h1 {
      font-size: 1.125rem;
      font-family: 'Baloo 2', cursive;
      font-weight: 700;
      line-height: 130%;
      margin-bottom: 1rem;
    }
  }
`
const BaseContainer = styled.div`
  background: ${(props) => props.theme['gray-100']};
  padding: 2.5rem;
  border-radius: 8px;
  margin-bottom: 0.75rem;

  display: flex;
  flex-direction: column;
`
export const FormContainer = styled(BaseContainer)``

export const CoffeesSelectedContainer = styled(BaseContainer)``

export const PaymentMethod = styled(BaseContainer)``

export const BaseBoxTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;
  margin-bottom: 2rem;
  strong {
    line-height: 130%;
    font-weight: 400;
    color: ${(props) => props.theme['gray-700']};
  }

  p {
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-600']};
  }
`
export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      flex-direction: column;
    }
  }

  input {
    background: ${(props) => props.theme['gray-200']};
    border: 0;
    padding: 0.75rem;
  }

  div {
    display: flex;
    gap: 1rem;
  }
`
