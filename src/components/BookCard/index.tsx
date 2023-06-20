import { Book } from "@prisma/client"

import { RatingStars } from "../RatingStars";
import { BookDetails, BookImage, BookName, Container } from "./styles"
import { Text } from "../typography";

export type BookWithAvgRating = Book & {
  avgRating: number
}

type BookCardProps = {
  book: BookWithAvgRating
  size?: "md" | "lg"
}

export const BookCard = ({ book, size = "md" }: BookCardProps) => {
  const IMAGE_SIZES = {
    md: {
      width: 64,
      height: 94
    }, 
    lg: {
      width: 108,
      height: 152
    }
  }

  const currentSize = IMAGE_SIZES[size]

  return (
    <Container>
      <BookImage
        src={book.cover_url} 
        width={currentSize.width} 
        height={currentSize.height}
        css={{ minWidth: currentSize.width }} 
        alt={book.name} 
      />
      <BookDetails>
        <div>
          <BookName size="xs">
            {book.name}
          </BookName>
          <Text size="sm" color="gray-400">
            {book.author}
          </Text>
        </div>

        <RatingStars rating={book.avgRating}/>
      </BookDetails>
    </Container>
  )
}