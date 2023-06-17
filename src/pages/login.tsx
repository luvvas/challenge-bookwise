import Head from "next/head";

import { AuthButtons } from "@/components/AuthButtons";
import { Text, Heading } from "@/components/typography";

import { LoginContainer, LogoSection, WelcomeSection } from "@/styles/pages/login";

export default function Login() {
  return (
    <LoginContainer>
      <Head>
        <title>Login | Bookwise</title>
        <link rel="shortcut icon" href="/images/favicon.svg" type="image/svg" />
      </Head>

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