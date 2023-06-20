import { useQuery } from '@tanstack/react-query'

import { BookCard, BookWithAvgRating } from '../BookCard'
import { api } from '@/lib/axios'
import { Link } from '../ui/Link'
import { Text } from '../typography'
import { Container } from "./styles"

export const PopularBooks = () => {
  const { data: popularBooks } = useQuery<BookWithAvgRating[]>(["popular-books"], async () => {
    const { data } = await api.get("/books/popular")
    return data?.books ?? []
  }) 

  return (
    <Container>
      <header>
        <Text size="sm">Livros Populares</Text>
        <Link href="/explore" text="Ver Todos" />
      </header>

      <section>
        {popularBooks?.map((book) => (
          <BookCard key={`popular-${book.id}`} book={book}/>
        ))}
      </section>
    </Container>
  )
}