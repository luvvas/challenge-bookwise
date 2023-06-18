import { ReactNode } from "react"
import { ComponentProps } from "@stitches/react"

import { Heading } from "@/components/typography"
import { Container } from "./styles"

type PageTitleProps = ComponentProps<typeof Container> & {
  icon: ReactNode
  title: string
}

export const PageTitle = ({ icon, title, ...props }: PageTitleProps) => {
  return (
    <Container {...props}>
      {icon}
      <Heading size="lg">{title}</Heading>
    </Container>
  )
}