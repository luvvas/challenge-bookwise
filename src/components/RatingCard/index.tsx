import Link from "next/link"
import { Book, Rating, User } from "@prisma/client"

import { useToggleShowMore } from "@/hooks/useToggleShowMore"
import { getRelativeTimeString } from "@/utils/getRelativeTimeString"
import { Avatar } from "../ui/Avatar"
import { BookContent, BookDetails, BookImage, Container, ToggleShowMoreButton, UserDetails } from "./styles"
import { Heading, Text } from "../typography"
import { RatingStars } from "../RatingStars"

export type RatingWithAuthorAndBook = Rating & {
  user: User
  book: Book
}

type RatingCardProps = {
  rating: RatingWithAuthorAndBook
}

const MAX_SUMMARY_LENGTH = 180

export const RatingCard = ({ rating }: RatingCardProps) => {
  const distance = getRelativeTimeString(new Date(rating.created_at), "pt-BR")

  const { text: bookSumary, toggleShowMore, isShowingMore } = useToggleShowMore(rating.book.summary, MAX_SUMMARY_LENGTH)

  return (
    <Container>
      <UserDetails>
        <section>
          <Link href={`/profile/${rating.user_id}`}>
            <Avatar src={rating.user.avatar_url!} alt={rating.user.name} />
          </Link>
          <div>
            <Text>{rating.user.name}</Text>
            <Text size="sm" color="gray-400">{distance}</Text>
          </div>
          
        </section>

        <RatingStars rating={rating.rate}/>
      </UserDetails>

      <BookDetails>
        <Link href={`/explore?book=${rating.book_id}`}>
          <BookImage 
            src={rating.book.cover_url}
            width={108} 
            height={152} 
            alt={rating.book.name}
          />
        </Link>

        <BookContent>
          <div>
            <Heading size="xs">{rating.book.name}</Heading>
            <Text size="sm" color="gray-400">{rating.book.author}</Text>
          </div>

          <Text size="sm" color="gray-300" css={{
            marginTop: "$5"
          }}>
            {bookSumary}
            {rating.book.summary.length > MAX_SUMMARY_LENGTH && (
              <ToggleShowMoreButton onClick={toggleShowMore}>
                {isShowingMore ? "ver menos" : "ver mais"}
              </ToggleShowMoreButton>
            )}
          </Text>
        </BookContent>
      </BookDetails>
    </Container>
  )
}