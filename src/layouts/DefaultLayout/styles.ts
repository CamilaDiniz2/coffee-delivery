import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 68rem;
  margin: 2rem auto;
  padding: 1.5rem 4rem;
  background: ${(props) => props.theme.white};

  border-radius: 8px;

  display: flex;
  flex-direction: column;
`
