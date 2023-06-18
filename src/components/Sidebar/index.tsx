import { signOut, useSession } from "next-auth/react"
import { SignIn, SignOut } from "@phosphor-icons/react"

import { Navigation } from "../Navigation"
import { Text } from '../../components/typography'

import { Container, LoginButton, UserDetails } from "./styles"

export const Sidebar = () => {
  const { data: session } = useSession()

  const user = session?.user;

  return (
    <Container>
      <div>
        <img className="logo" src="/images/logo.svg" alt="BookWise Logo" />

        <Navigation />
      </div>

      <footer>
        {!user ? (
          <LoginButton href="/login">
            Fazer Login
            <SignIn size={24} />
          </LoginButton>
        ) : (
          <UserDetails>
            {/* FALTA AVATAR */}
            <Text size="sm">{user?.name}</Text>
            <SignOut color="#F75A67" onClick={() => signOut()}/>
          </UserDetails>
        )}
      </footer>
    </Container>
  )
}