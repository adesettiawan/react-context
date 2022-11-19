import { useAppContext } from "../context/AppContext";
import ChangeProfile from "./ChangeProfile";

export const Profile = () => {
  const { username } = useAppContext();
  return (
    <h1>
      THIS IS THE PROFILE PAGE, username is: {username}
      <br></br>
      <ChangeProfile />
    </h1>
  );
};
