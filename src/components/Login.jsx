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
