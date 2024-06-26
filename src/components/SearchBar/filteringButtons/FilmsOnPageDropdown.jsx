import NavDropdown from 'react-bootstrap/NavDropdown';

const FilmsOnPageDropdown = ({ searchHandler }) => (
  <NavDropdown
    menuVariant="dark"
    title="Фильмов на странице"
  >
    <NavDropdown.Item
      as="button"
      onClick={() => searchHandler({ limit: 10 })}
    >
      10
    </NavDropdown.Item>
    <NavDropdown.Item
      as="button"
      onClick={() => searchHandler({ limit: 20 })}
    >
      20
    </NavDropdown.Item>
    <NavDropdown.Item
      as="button"
      onClick={() => searchHandler({ limit: 50 })}
    >
      50
    </NavDropdown.Item>
    <NavDropdown.Item
      as="button"
      onClick={() => searchHandler({ limit: 100 })}
    >
      100
    </NavDropdown.Item>
  </NavDropdown>
);

export default FilmsOnPageDropdown;
