import { Container } from "./styles"

import { Text } from '../typography'
import { Link } from "../ui/Link"
import { UserRatingCard } from "../UserRatingCard"

export const BookRatings = () => {
  const handleRate = () => {
    console.log('Avaliar')
  }

  return (
    <Container>
      <header>
        <Text>Avaliações</Text>
        <Link withoutIcon onClick= {handleRate} text="Avaliar" />
      </header>

      <section>
        {Array.from({ length: 10 }).map((_, index) => (
          <UserRatingCard key={index} rating={{
            rate: 2,
            user: {
              name: "John Doe",
              avatar_url: "https://github.com/luvvas.png"
            },
            created_at: new Date(),
            description: "skflgjnasfsdklagjadfgkva dfjkl fadjkb fjdalv jsl djslafsdhjfafhskjdk v sakdjflgvanmcsd fkjld ghbnvrel"
          }} />
        ))}
      </section>
    </Container>
  )
}