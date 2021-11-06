import Link from 'next/link'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import { Link as ChakraLink, Text, Code, List, ListIcon, ListItem } from '@chakra-ui/react'
import { Container } from '../components/Container'
import { CTA } from '../components/CTA'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { Main } from '../components/Main'

const Private = () => (
  <Container height='100vh'>
    <Hero title='Private Page' />
    <Main>
      <ChakraLink href='/'>Home</ChakraLink>
    </Main>

    <DarkModeSwitch />
  </Container>
)

export default Private
