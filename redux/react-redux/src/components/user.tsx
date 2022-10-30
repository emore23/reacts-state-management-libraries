//Dependencies
import { useSelector } from "react-redux";

// Styles
import { UserComponent } from "../global/styles";

// Store
import { selectUser } from "../redux/userSlice";

export default function User() {
  const { name } = useSelector(selectUser);

  return <UserComponent>user: {name}</UserComponent>;
}
