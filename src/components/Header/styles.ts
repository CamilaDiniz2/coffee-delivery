import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  img {
    width: 5.25rem;
    height: 2.5rem;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      gap: 0.25rem;
      border-radius: 8px;
      text-decoration: none;
      padding: 8px;

      &:first-child {
        background: ${(props) => props.theme['purple-300']};
        color: ${(props) => props.theme['purple-900']};
        font-size: 0.875rem;
        line-height: 130%;
      }

      &:last-child {
        background: ${(props) => props.theme['yellow-300']};
        color: ${(props) => props.theme['yellow-900']};
        gap: 0.5rem;

        span {
          background: ${(props) => props.theme['yellow-900']};
          color: ${(props) => props.theme['gray-100']};
          font-size: 0.75rem;

          border-radius: 50%;
          padding: 0.15rem 0.3rem;

          position: absolute;
          margin-top: -2.25rem;
          margin-left: 2.25rem;
        }
      }
    }
  }

  @media (max-width: 512px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    flex: 1;

    nav {
      margin-bottom: 3rem;
      display: flex;
      width: 100%;
      justify-content: center;
    }
  }
`
