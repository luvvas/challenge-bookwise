import { PageTitle } from "../ui/PageTitle"
import { Container } from "./styles"
import { ChartLineUp } from "@phosphor-icons/react"

import { RatingCard } from "../RatingCard"
import { Text } from '../typography'

export const LatestRatings = () => {
  return (
    <Container>
      <PageTitle 
        title="Início" 
        icon={<ChartLineUp 
        size={32} />} 
        css={{ marginBottom: 40 }}
      />

      <Text size="sm">Avaliações mais recentes</Text>
      
      <section>
        {Array.from({length: 20}).map((_, i) => (
          <RatingCard key={i} rating={{
            id: "aa",
            rate: 4,
            user: {
              id: "dhjkafvc",
              name: "John Doe",
              avatar_url: "https://avatars.githubusercontent.com/u/118952443?v=4",
              email: "john@doe.com",
              created_at: new Date()
            },
            book: {
              id: "dassdjkfasdjk",
              name: "John Doe",
              author: "John Doe",
              summary: "John Doe",
              total_pages: 100,
              cover_url: "https://avatars.githubusercontent.com/u/118952443?v=4"
            },
            created_at: new Date()
          }} />
        ))}
      </section>
    </Container>
  )
}