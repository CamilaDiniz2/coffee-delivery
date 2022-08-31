import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  margin-top: 2.5rem;
  width: 100%;

  form {
    display: grid;
    grid-template-columns: 1fr 400px;
    align-items: flex-start;
    justify-content: center;
    padding: 1rem;
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

export const FormContainerBox = styled.div`
  @media (max-width: 1024px) {
    width: 100%;
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

export const CoffeesSelectedContainer = styled(BaseContainer)`
  padding: 2.5rem 1.5rem;
`

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
`
export const CoffeesSelected = styled.div`
  @media (max-width: 1024px) {
    width: 100%;
  }
`

export const ButtonConfirm = styled.button`
  width: 100%;
  max-width: 368px;
  margin-top: 12px;
  padding: 16px;

  border-radius: 6px;
  border: 0;
  background-color: ${({ theme }) => theme['yellow-600']};
  color: ${({ theme }) => theme.white};
  font-size: 0.875rem;
  text-transform: uppercase;
  cursor: pointer;

  @media (max-width: 1024px) {
    margin: 0 0 0 auto;
    padding: 18px;
    margin-top: 2rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme['yellow-900']};
  }

  &:disabled {
    background-color: ${({ theme }) => theme['yellow-300']};
  }
`
export const SuccessDeliveryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }

  h1 {
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['yellow-900']};
    font-weight: bold;
    font-size: 2rem;
    line-height: 130%;

    @media (max-width: 912px) {
      text-align: center;
    }
  }

  p {
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-700']};
    margin-bottom: 2.5rem;

    @media (max-width: 768px) {
      font-size: 1rem;
      margin-bottom: 1.5rem;
      text-align: center;
    }

    @media (max-width: 912px) {
      text-align: center;
    }
  }
`

export const SucessDeliveryContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 4rem;

  img {
    max-width: 350px;
  }

  @media (max-width: 912px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`

export const SuccessDeliveryInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem 2rem;
  gap: 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 6px 36px;
    padding: 1px;
    background: linear-gradient(
      45deg,
      ${(props) => props.theme['yellow-900']},
      ${(props) => props.theme['purple-900']}
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`

const SUCCESS_ICONS_BACKGROUND_COLORS = {
  yellowDark: 'yellow-900',
  yellow: 'yellow-600',
  purpleDark: 'purple-900',
} as const

interface SuccessIconsBackgroundColorsProps {
  successIconsBackgroundColors: 'yellowDark' | 'yellow' | 'purpleDark'
}

export const SuccessIcons = styled.span<SuccessIconsBackgroundColorsProps>`
  padding: 0.5rem;
  color: ${(props) => props.theme.white};
  background: ${(props) =>
    props.theme[
      SUCCESS_ICONS_BACKGROUND_COLORS[props.successIconsBackgroundColors]
    ]};
  line-height: 0;
  border-radius: 50%;
`
