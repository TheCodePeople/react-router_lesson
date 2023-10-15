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
