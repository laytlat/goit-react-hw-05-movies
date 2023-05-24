import { NavLink, Outlet } from 'react-router-dom';
import { Container, Header } from './SharedLayout.styled';

export function SharedLayout() {
  return (
    <Container>
      <Header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </Header>
      <Outlet />
    </Container>
  );
}
