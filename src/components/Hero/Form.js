function Form() {
  return (
    <div className="form--container">
      <p>Email address</p>
      <input type="text" placeholder="Email" />
      <p>Password</p>
      <input type="password" placeholder="Password" />
      <a link="https://www.google.com" className="forget-text">
        Forgot Password?
      </a>
      <button className="signin_button">Sign In</button>
    </div>
  );
}

export default Form;
