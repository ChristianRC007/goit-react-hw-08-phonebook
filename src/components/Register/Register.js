function Register() {
  return (
    <form>
      <label>
        <span>Name</span>
        <input type="text" required />
      </label>
      <label>
        <span>E-mail</span>
        <input type="text" required />
      </label>
      <label>
        <span>Password</span>
        <input type="text" required />
      </label>
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
