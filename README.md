# Overview

React Router is a widely used routing library. It provides a declarative way to handle routing in a React application. It allows developers to define different routes and associate them with specific components or views.

When a user navigates to a particular `URL` or interacts with the application's navigation elements, React Router ensures that the corresponding component is rendered, maintaining the application's state and providing a consistent user experience.

## Installation

Start by installing React Router using either `npm` or `yarn`.

Open your command line interface and navigate to your project's directory. Then, run one of the following commands based on your package manager:

Using npm:

```bash
$ npm install react-router-dom
```

Using yarn:

```bash
$ yarn add react-router-dom
```

This will install the necessary packages for React Router.

## Project Structure

In our React Application, we got `Home`, `About` and `Contact` components

We will be using the `Navbar` component to navigate through our application with the help of react-router

## Adding The Router

To add the router to our application, we navigate to our app entry point
`index.js` and
add the following import statements:

```jsx
import { BrowserRouter } from 'react-router-dom'
```

Wrap the BrowserRouter between our `App` component:

```jsx
// index.js

import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"


import "./styles.css";

import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

## Creating Routes

Navigate to the `App` component, inside it we have `Home`,`About`, `Contact` components.

To define our routes inside our app,

1. Import the `Routes` & `Route` components from react router.
   ```jsx
    import { Routes, Route } from "react-router-dom";
   ```
2. Add new `Route` component for each component or page you want to access through react router.

   ```jsx
   // App.js

   <div>
     <Routes>
       <Route />
       <Route />
       <Route />
     </Routes>
   </div>
   ```

3. Add `Home`, `About` and `Contact` to our `Route` components by using the `element` prop.

   ```jsx
   // App.js

   <div>
     <Routes>
       <Route element={<Home />} />
       <Route element={<About />} />
       <Route element={<Contact />} />
     </Routes>
   </div>
   ```

   The `element` prop specifies the component to render.

4. Specify the path for each `Route` :

   ```jsx
   // App.js

   <div>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
     </Routes>
   </div>
   ```

   The `path` prop specifies the `URL` path for the route.

Now we can type in our browser the `URL` that matches the path in our `Route`
and the component associated with it will be rendered.

For example:

- `localhost:3000/` will render our `Home` component.
- `localhost:3000/about` will render our `About` component.
- `localhost:3000/contact` will render our `Contact` component.

## Adding the `NotFound` component

In case we enter a `URL` that is not specified in our routes, nothing will be rendered because we have not added a `Route` to deal with it.

To fix that we need to add a new route at the end with the path of `"*"`.

Using `path="*"` means "match anything", so this route acts like a catch-all for `URL`s that we don't have explicit routes for.

```jsx
// App.js

<div>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</div>
```

Now if we type anything other than the routes we specified `NotFound` component will be rendered.

## Using `Navbar` to navigate through our app

Typing the `URL` in our browser every time we want to navigate from one route to another can be tedious.

We can use the `Link` component from react-router to navigate to the desired `URL`s in our application.

In our `Navbar`, import `Link`:

```jsx
// Navbar.jsx

import { Link } from "react-router-dom"
```

`Link` is similar to the anchor tag `<a>` in that it allows you to navigate through pages based on an `href` or `URL`.

But instead of using an `href`, `Link` has a property called `to` which allows you to enter the `URL` for the components that matches the `path` property we added in our `Route`

Here's how the `Navbar` will look like using the `Link` component:

```jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About Us</Link>
        </li>

        <li>
          <Link to="/contact">Contact Us</Link>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;

```

Now all we need is to use the `Navbar` in our `App` component:

```jsx
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;

```