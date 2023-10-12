import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleReturnButton = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Not Found: </h1>
      <p>Page is not found!</p>
      <button onClick={handleReturnButton}>Return</button>
    </div>
  );
};

export default NotFound;
