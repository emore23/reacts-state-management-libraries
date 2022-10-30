import { useAtuh } from "../providers/auth";

export default function Profile() {
  const { user }: any = useAtuh();

  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
}
