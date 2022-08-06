import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  margin-top: 2.5rem;
  width: 100%;

  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    @media (max-width: 1024px) {
      display: flex;
      flex-direction: column;
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
    background-color: ${({ theme }) => theme['gray-200']};
    border: 0;
    padding: 12px;
    font-size: 0.875rem;
    color: ${({ theme }) => theme['gray-700']};

    &:disabled {
      background-color: ${({ theme }) => theme['gray-300']};
    }

    &::placeholder {
      color: ${({ theme }) => theme['gray-500']};
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme['yellow-600']};
      border-radius: 6px;
    }
  }

  input[id='cep'] {
    max-width: 12.5rem;
  }
`
export const FormNumberAndComplement = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 1fr;
  gap: 8px;
`

export const FormSelectCityAndState = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 1fr 4rem;
  gap: 12px;
`
export const FormaOfPaymentMethods = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;

  /*  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  } */
`
export const CoffeesSelected = styled.div`
  button {
    width: 100%;
    margin-top: 16px;
    padding: 16px;

    border-radius: 6px;
    border: 0;
    background-color: ${({ theme }) => theme['yellow-600']};
    color: ${({ theme }) => theme.white};
    font-size: 0.875rem;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme['yellow-900']};
    }
  }
`
