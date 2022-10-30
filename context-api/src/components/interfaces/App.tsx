// Styles
import { AppComponent } from "../../global/styles";

// Providers
import { useAtuh } from "../../providers/auth";

// Components
import Profile from "../profile";

export default function App() {
  const { setUser }: any = useAtuh();

  return (
    <AppComponent>
      <input
        type="text"
        placeholder="User"
        onChange={(e) => setUser({ name: e.target.value })}
      />

			<Profile />
    </AppComponent>
  );
}
