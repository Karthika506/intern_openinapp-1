function Sign(props) {
  return (
    <>
      <div className="sign__button">
        <img src={require(`../../assets/${props.image}.png`)} />
        <p>Sign in with {props.title}</p>
      </div>
    </>
  );
}

export default Sign;
