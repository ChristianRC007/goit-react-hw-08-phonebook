function Login() {
  return (
    <form>
      <label>
        <span>E-mail</span>
        <input type="text" required />
      </label>
      <label>
        <span>Password</span>
        <input type="text" required />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
