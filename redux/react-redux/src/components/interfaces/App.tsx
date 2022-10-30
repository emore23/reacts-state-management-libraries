// Components
import Login from "../login";
import Logout from "../logout";
import User from "../user";

// Styles
import { AppComponent } from "../../global/styles";

export default function App() {
  return (
    <AppComponent>
      <Login />
      <User />
      <Logout />
    </AppComponent>
  );
}
