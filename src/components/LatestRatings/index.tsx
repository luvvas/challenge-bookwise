import { PageTitle } from "../ui/PageTitle"
import { Container } from "./styles"
import { ChartLineUp } from "@phosphor-icons/react"
import { useQuery } from "@tanstack/react-query"

import { RatingCard, RatingWithAuthorAndBook } from "../RatingCard"
import { Text } from '../typography'
import { api } from "@/lib/axios"

export const LatestRatings = () => {
  const { data: ratings } = useQuery<RatingWithAuthorAndBook[]>(["latest-ratings"], async () => {
    const { data } = await api.get("/ratings/latest")
    return data?.ratings ??[]
  })

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
        {ratings?.map((rating) => (
          <RatingCard key={rating.id} rating={rating} />
        ))}
      </section>
    </Container>
  )
}