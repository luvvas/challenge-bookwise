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
              summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie fermentum neque, non venenatis dui commodo id. In id justo ac lacus mattis placerat. Aliquam eget dapibus mi, gravida faucibus nunc. Maecenas pulvinar, ex eget sollicitudin euismod, est augue pulvinar mauris, sollicitudin rutrum magna sem quis est. Suspendisse sodales urna sit amet velit elementum imperdiet. Nam fringilla massa lacus, a finibus magna eleifend nec. In pellentesque pretium risus, ac euismod ipsum congue nec. Vivamus eget maximus libero. Nunc et leo blandit, lacinia nisi nec, feugiat justo. Quisque sodales consectetur velit non posuere.",
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