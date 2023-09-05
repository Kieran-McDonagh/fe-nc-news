import { useContext, useState } from "react";
import { UserContext } from "../contexts/userContext";
import { getUsers } from "../utils/api-utils";

const Login = () => {
  const { setUser } = useContext(UserContext);
  const [newInput, setNewInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    getUsers().then(({ users }) => {
      users.map((user) => {
        if (newInput === user.username) {
          setUser(user);
        }
      });
    });
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label htmlFor="enter-user">Enter Username</label>
      <input placeholder="grumpy19"
        id="enter-user"
        value={newInput}
        onChange={(event) => {
          setNewInput(event.target.value);
        }}
      ></input>
      <button>Log in</button>
    </form>
  );
};

export default Login;
