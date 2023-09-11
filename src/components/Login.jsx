import { useContext, useState } from "react";
import { UserContext } from "../contexts/userContext";

const Login = ({setUsername}) => {
    const { user } = useContext(UserContext);
    const [usernameErr, setUsernameErr] = useState(null);
    const [typedUsername, setTypedUsername] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        let foundUser = false;
        user.forEach((user) => {
          if (typedUsername === user.username) {
            setUsername(user.username);
            foundUser = true;
          }
        });
        if (!foundUser) {
          setUsernameErr("Invalid username");
          setTypedUsername("");
        }
      };

      if (usernameErr) {
        return (
          <div className="alert-err">
            <h3>{usernameErr}</h3>
            <span>Try one of these:</span>
            <ul>
              <li>tickle122</li>
              <li>grumpy19</li>
              <li>jessjelly</li>
            </ul>
            <button
              onClick={() => {
                setUsernameErr(null);
              }}
            >
              Retry
            </button>
          </div>
        );
      }

    return <form onSubmit={handleSubmit} className="login-form">
    <label htmlFor="login">
      Login to post or delete a comment:
      <input
        required
        placeholder="username"
        id="login"
        value={typedUsername}
        onChange={(event) => {
          setTypedUsername(event.target.value);
        }}
      ></input>
    </label>
    <button>login</button>
  </form>
};

export default Login;
