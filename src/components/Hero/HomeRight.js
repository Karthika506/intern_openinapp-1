import Form from "./Form";
import Sign from "./Sign";

function HomeRight() {
  return (
    <>
      <section className="home-right">
        <div>
          <div className="right--heading">
            <h1>Sign In</h1>
            <p>Sign in to your account</p>
          </div>
          <div className="button--container">
            <Sign image="google" title="Google" />
            <Sign image="apple" title="Apple" />
          </div>
          <Form />
          <p className="register--text">
            <span className="color__grey">Don't have an account?</span>{" "}
            <span className="forget-text">Register here</span>
          </p>
        </div>
      </section>
    </>
  );
}

export default HomeRight;
