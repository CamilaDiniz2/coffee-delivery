import styled from 'styled-components'

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
