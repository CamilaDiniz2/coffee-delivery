import { HomeContainer } from './styles'
import { HomeContent } from './components/HomeContent'
import { HomeProducts } from './components/HomeProducts'

export function Home() {
  return (
    <HomeContainer>
      <HomeContent />
      <HomeProducts />
    </HomeContainer>
  )
}
