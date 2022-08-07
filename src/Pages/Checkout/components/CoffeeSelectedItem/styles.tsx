import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme['gray-300']};
  gap: 8px;

  img {
    width: 4rem;
    height: 4rem;
  }
`
export const CoffeeInfo = styled.div`
  display: flex;
  flex-direction: column;
`
