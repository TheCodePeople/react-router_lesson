import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn, onLogOut }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        {isLoggedIn && (
          <>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/messages">Messages</Link>
            </li>
          </>
        )}

        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>

        {!isLoggedIn && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}

        {isLoggedIn && <button onClick={onLogOut}>Logout</button>}
      </ul>
    </nav>
  );
};

export default Navbar;
