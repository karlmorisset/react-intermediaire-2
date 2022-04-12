import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Go Home</Link>
        </li>
        <li>
          <Link to="/simpsons">Une citation des Simpsons</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
