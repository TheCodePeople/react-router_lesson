# Restricted Routes

In this lesson, we will explore the concept of restricted routes using React Router. We will create a simple login page, and based on the user's login status, we will either grant or restrict access to the `posts` & `messages` routes.

## Components

- `Login` Component

  The `Login` component is used to authenticate users. It includes a simple form where users can enter a password to log in.

  ```jsx
  const Login = ({ onLogin }) => {
    const onSubmitHandler = (e) => {
      e.preventDefault();
      onLogin(e.target[0].value);
    };

    return (
      <form className="login-form" onSubmit={onSubmitHandler}>
        <span>Hint: Password is (1) :)</span>
        <div>
          <label>Password:</label>
          <input type="password" placeholder="Password" />
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  };

  export default Login;
  ```

  The component has a callback function ( `onLogin` ) which will be handled in the `App` component.

- `Navbar` Component

  The Navbar component is a navigation bar that dynamically displays links based on the user's login status.

  - If the user is logged in, it shows links to Posts, Messages pages & a logout button.
  - If the user is not logged in, it displays a Login link.

    ```jsx
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
    ```

    The Two props used by the Navbar ( `isLoggedIn`, `OnLogOut` ) are passed from the `App` component.

- `App` Component

  Inside the `App` component we will manage the user's login status and provide routing based on whether the user is logged in or not.

  ```jsx
  const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (password) => {
      if (password === "1") {
        setIsLoggedIn(true);
        navigate("/", { replace: true });
      }
    };

    const handleLogout = () => {
      setIsLoggedIn(false);
      navigate("/");
    };

    return (
      <div className="container">
        <Navbar isLoggedIn={isLoggedIn} onLogOut={handleLogout} />

        <Routes>
          {/* ... */}
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          {/* ... */}
        </Routes>
      </div>
    );
  };
  ```

  - `handleLogin` will check if the password provided is correct and set `isLoggedIn` state to true, then it will navigate the user to the home page. The `replace` option used with the navigate hook is meant to replace the current url (in this case it's the `/login`) with the home route (`/`).

  - `handleLogout` will set `isLoggedIn` state to false and navigate the user to the home page.

  To restrict the routes, we use the `isLoggedIn` state with the ternary operator:

  ```jsx
  const App = () => {
    // ...
    return (
      <div className="container">
        <Navbar isLoggedIn={isLoggedIn} onLogOut={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {isLoggedIn ? (
            <>
              <Route path="/posts" element={<Posts />} />
              <Route path="/posts/:id" element={<PostDetails />} />
              <Route path="/messages" element={<Messages />}>
                <Route path="/messages/:id" element={<MessageDetails />} />
              </Route>
            </>
          ) : (
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
          )}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    );
  };
  ```

  - If the user is logged in, the Posts and Messages routes are accessible, and the associated components are rendered.
  - If the user is not logged in, the Login route is accessible, allowing users to log in.

  The Routes component dynamically displays routes based on the user's login status. This ensures that unauthorized users cannot access certain routes.

## Usage

- Start your React application.
- Navigate to different parts of your application using the links provided in the Navbar.
- If you are not logged in, click the "Login" link and enter the correct password (Hint: Password is "1") to access restricted routes.
- If you are logged in, access the Posts and Messages routes. Click "Logout" to log out and restrict access to these routes again.
