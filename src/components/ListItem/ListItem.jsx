import { Link } from 'react-router-dom';

export function ListItem({ id, title, name }) {
  return (
    <li key={id}>
      <Link to={`movies/${id}`}>{title ?? name}</Link>
    </li>
  );
}
