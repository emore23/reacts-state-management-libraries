// Dependencies
import { useDispatch } from "react-redux";

// Styles
import { LogoutComponent } from "../global/styles";

// Store
import { logout } from "../redux/userSlice";

export default function Logout() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <LogoutComponent>
      <button onClick={handleLogout}>Logout</button>
    </LogoutComponent>
  );
}
