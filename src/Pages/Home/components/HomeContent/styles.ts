import styled from 'styled-components'

export const HomeSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
  align-items: center;
  margin-bottom: 3rem;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;

    margin-bottom: 2rem;

    img {
      display: none;
    }
  }
`

export const HomeSectionContent = styled.div`
  h1 {
    color: ${(props) => props.theme['gray-800']};
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    line-height: 130%;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-700']};
    margin-bottom: 3.5rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
      margin-bottom: 2rem;
    }
  }
`

export const HomeSectionContentItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  gap: 1.25rem 2.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  @media (max-width: 512px) {
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 0.75rem;

    div {
      font-size: 0.75rem;
    }
  }
`

const HOME_ICONS_BACKGROUND_COLORS = {
  yellowDark: 'yellow-900',
  yellow: 'yellow-600',
  purpleDark: 'purple-900',
  gray: 'gray-600',
} as const

interface HomeIconsBackgroundColorsProps {
  homeIconsBackgroundColors: 'yellowDark' | 'yellow' | 'purpleDark' | 'gray'
}

export const HomeIcons = styled.span<HomeIconsBackgroundColorsProps>`
  padding: 0.5rem;
  color: ${(props) => props.theme.white};
  background: ${(props) =>
    props.theme[HOME_ICONS_BACKGROUND_COLORS[props.homeIconsBackgroundColors]]};
  line-height: 0;
  border-radius: 50%;
  }

  @media(max-width: 768px){
    padding: 0.3rem;
  }
`
