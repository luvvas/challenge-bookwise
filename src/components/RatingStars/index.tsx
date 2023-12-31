import { ComponentProps } from "@stitches/react";
import { Star } from "@phosphor-icons/react"

import { Container } from "./styles"

type RatingStarsProps = ComponentProps<typeof Container> &{
  rating: number;
}

export const RatingStars = ({ rating, size = "sm", ...props }: RatingStarsProps) => {
  return (
    <Container size={size} {...props}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star 
          key={`star-${i}`}
          weight={(i + 1) <= rating ? "fill" : "regular"}
        />
      ))}
    </Container>
  )
}