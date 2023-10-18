# React Router Outletsh Lesson

React Router's outlets are a powerful feature that allows you to create nested routing structures, enabling you to define multiple levels of routes and render components at different levels of your application hierarchy. `Outlets` are primarily used in situations where you have a parent route that acts as a container for child routes.

in this lesson, We are going to create a messages page where each user's message will be displayed on the same page, but each user's message will have its own distinct route.

## Components

- `<Messages/>` Component

  The Messages component serves as a container for displaying a list of messages.

  It uses the `Outlet` component to render nested routes.

  ```jsx
  import { Outlet, useNavigate } from "react-router-dom";

  import { messages } from "../data";

  const Messages = () => {
    const navigate = useNavigate();

    const handleMessageClick = (id) => {
      navigate(`/messages/${id}`);
    };

    return (
      <div className="messages-container">
        <ul className="messages-list">
          {messages.map((message) => (
            <li
              className="message-item"
              key={message.id}
              onClick={() => handleMessageClick(message.id)}
            >
              {message.user}
            </li>
          ))}
        </ul>

        <Outlet />
      </div>
    );
  };

  export default Messages;
  ```

- `<MessageDetails/>` Component

  The `MessageDetails` component displays the details of a specific message.

  It uses the `useParams` hook to extract the message ID from the URL and fetches the corresponding message data.

  ```jsx
  import { useEffect, useState } from "react";
  import { useParams } from "react-router-dom";

  import { messages } from "../data";

  const MessageDetails = () => {
    const [messageDetails, setMessageDetails] = useState(null);
    const { id } = useParams();

    useEffect(() => {
      const currentMessage = messages.find(
        (message) => message.id === parseInt(id)
      );

      setMessageDetails(currentMessage);
    }, [id]);

    if (!messageDetails) return null;

    return (
      <div>
        <h4>{messageDetails.user}</h4>
        <p>{messageDetails.text}</p>
      </div>
    );
  };

  export default MessageDetails;
  ```

- `<App/>` Component

  To set up the routes for `Messages` and `MessageDetails`, we need to nest them within one another to ensure that the `Outlet` functions correctly.

  ```jsx
  const App = () => {
    return (
      <div className="container">
        <Navbar />
        <Routes>
          {/* Other Routes */}
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/messages" element={<Messages />}>
            <Route path="/messages/:id" element={<MessageDetails />} />
          </Route>
          {/* Other Routes */}
        </Routes>
      </div>
    );
  };
  ```

  - `/messages` is the parent route that contains the `Messages` component, while the nested route `:id` is for `MessageDetails`.
  - The `Outlet` component in the Messages component allows for rendering nested content.

  It's important to note that we didn't place each route side by side, as we did for `Posts` and `PostDetails`, because these components do not utilize outlets, making nesting unnecessary.

- `<Navbar/>` component

  In the `Navbar` component we add the `/messages` link so that we can navigate to it.

  ```jsx
  const Navbar = () => {
    return (
      <nav>
        <ul>
          {/* Other links */}
          <li>
            <Link to="/messages">Messages</Link>
          </li>
          {/* Other links */}
        </ul>
      </nav>
    );
  };
  ```

## Usage

- Start your React application.
- Navigate to different parts of your application using the links provided in the Navbar.
- Click on messages to view the list of messages and click on individual messages to see their details.
