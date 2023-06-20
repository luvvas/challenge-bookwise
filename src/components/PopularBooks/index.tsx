import { BookCard } from '../BookCard'

import { Link } from '../ui/Link'
import { Text } from '../typography'
import { Container } from "./styles"

export const PopularBooks = () => {
  return (
    <Container>
      <header>
        <Text size="sm">Livros Populares</Text>
        <Link href="/explore" text="Ver Todos" />
      </header>

      <section>
        {Array.from({ length: 4 }).map((_, i) => (
          <BookCard key={`popular-${i}`} book={{
            id: "",
            author: "John Doe",
            avgRating: 4,
            cover_url: "https://avatars.githubusercontent.com/u/118952443?v=4",
            name: "Lorem Ipsum",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pretium arcu a massa vulputate, sit amet dictum elit feugiat.",
            total_pages: 100,
          }}/>
        ))}
      </section>
    </Container>
  )
}