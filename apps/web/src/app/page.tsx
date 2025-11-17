import Link from 'next/link'
import { styled } from '@ds/design-system'

const Container = styled('div', {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$8',
  textAlign: 'center',
})

const Title = styled('h1', {
  fontSize: '$48',
  fontWeight: '$bold',
  color: '$textPrimary',
  marginBottom: '$4',
})

const Description = styled('p', {
  fontSize: '$18',
  color: '$textSecondary',
  marginBottom: '$8',
  maxWidth: '600px',
})

const LinkButton = styled(Link, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$16',
  fontWeight: '$medium',
  color: '$textInverse',
  backgroundColor: '$actionPrimary',
  padding: '$4 $8',
  borderRadius: '$md',
  textDecoration: 'none',
  transition: 'all $base ease-in-out',

  '&:hover': {
    backgroundColor: '$actionPrimaryHover',
  },
})

export default function Home() {
  return (
    <Container>
      <Title>B2B Design System</Title>
      <Description>
        A comprehensive design system built with Next.js, TypeScript, and
        Stitches. Explore our component library and design foundations.
      </Description>
      <LinkButton href="/ds">View Design System</LinkButton>
    </Container>
  )
}
