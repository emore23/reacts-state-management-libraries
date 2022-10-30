// Dependencies
import { useState } from "react";
import { useDispatch } from "react-redux";

// Styles
import { LoginComponent } from "../global/styles";

// Store
import { changeUser } from "../redux/userSlice";

export default function Login() {
  const [name, setName] = useState<string>("");
  const dispatch = useDispatch();

  const handleLogin = (e: any) => {
    e.preventDefault();

    dispatch(changeUser(name));
  };

  return (
    <LoginComponent>
      <form onSubmit={handleLogin}>
        <h1>Login</h1>

        <div className="content">
          <input
            type="text"
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
          />

          <button type="submit">Login</button>
        </div>
      </form>
    </LoginComponent>
  );
}
