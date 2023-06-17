import { LoginContainer, LogoSection, WelcomeSection } from "@/styles/pages/login";

import { AuthButtons } from "@/components/AuthButtons";
import { Text, Heading } from "@/components/typography";

export default function Login() {
  return (
    <LoginContainer>
      <LogoSection>
        <img src="/images/logo.svg" alt="Bookwise Logo"/>
      </LogoSection>

      <WelcomeSection>
        <Heading size="lg" color="gray-100">Boas vindas!</Heading>
        <Text color="gray-200">Faça seu login ou acesse como visitante</Text>
        <AuthButtons></AuthButtons>
      </WelcomeSection>
    </LoginContainer>
  )
}