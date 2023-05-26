import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ListItem({ id, title, name, path, propState }) {
  return (
    <li key={id}>
      <Link state={propState} to={path}>
        {title ?? name}
      </Link>
    </li>
  );
}

ListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  name: PropTypes.string,
  path: PropTypes.string.isRequired,
};
