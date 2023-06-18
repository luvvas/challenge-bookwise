import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { SignIn, SignOut } from "@phosphor-icons/react"

import { Navigation } from "../Navigation"
import { Text } from '../../components/typography'
import { Avatar } from "../ui/Avatar"

import { Container, LoginButton, UserDetails } from "./styles"

export const Sidebar = () => {
  const { data: session } = useSession()
  const router = useRouter()

  const user = session?.user;

  const handleOpenProfile = () => {
    router.push(`/profile/${user?.id}`)
  }

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
            <Avatar  size="sm" src={user?.avatar_url} alt={user?.name} onClick={() => handleOpenProfile()} css={{ cursor: "pointer" }}/>
            <Text size="sm">{user?.name}</Text>
            <SignOut color="#F75A67" onClick={() => signOut()}/>
          </UserDetails>
        )}
      </footer>
    </Container>
  )
}