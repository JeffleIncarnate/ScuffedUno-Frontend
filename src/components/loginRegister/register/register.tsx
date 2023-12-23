import "./register.scss";

function _Register() {
  return (
    <form className="Register" onSubmit={() => {}}>
      <h2>Register</h2>

      <input type="text" id="" placeholder="Username" />
      <input type="text" id="" placeholder="Password" />

      <div>
        <input type="text" id="" placeholder="Password" />
        <input type="text" id="" placeholder="Confirm Password" />
      </div>

      <button type="submit">Register</button>
    </form>
  );
}

export default _Register;
