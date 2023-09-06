import { useContext, useState } from "react";
import { UserContext } from "../contexts/userContext";
import { getUsers } from "../utils/api-utils";

const Login = () => {
  const { setUser } = useContext(UserContext);
  const [newInput, setNewInput] = useState("");
  const [err, setErr] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    getUsers().then(({ users }) => {
      users.map((user) => {
        if (newInput === user.username) {
          setUser(user);
        } else {
          setErr(true);
        }
      });
    });
  };

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="enter-user">Enter Username</label>
        <input
          required
          placeholder="grumpy19"
          id="enter-user"
          value={newInput}
          onChange={(event) => {
            setNewInput(event.target.value);
          }}
        ></input>
        <button>Log in</button>
      </form>
      {err ? (
        <section className="invalid-login">
          <h3>Invalid username!</h3>
          <span>Try one of these:</span>
          <ul>
            <li>tickle122</li>
            <li>grumpy19</li>
            <li>jessjelly</li>
          </ul>
        </section>
      ) : null}
    </>
  );
};

export default Login;
