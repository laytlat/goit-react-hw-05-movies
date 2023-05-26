import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, StyledNavLink } from './SharedLayout.styled';

export default function SharedLayout() {
  return (
    <Container>
      <Header>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </Header>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
