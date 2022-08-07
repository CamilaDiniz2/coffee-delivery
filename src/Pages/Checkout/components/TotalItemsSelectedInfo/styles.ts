import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;
    padding: 12px 0;

    span {
      font-size: 0.875rem;
      line-height: 130%;
      color: ${({ theme }) => theme['gray-600']};
    }

    p {
      font-size: 1rem;
      line-height: 130%;
      color: ${({ theme }) => theme['gray-600']};
    }

    strong {
      font-size: 1.25rem;
      color: ${({ theme }) => theme['gray-700']};
      font-weight: bold;
    }
  }
`
