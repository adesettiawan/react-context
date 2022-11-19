import { useAppContext } from "../context/AppContext";

export const Home = () => {
  const { username } = useAppContext();

  return <h1> THIS IS THE HOME PAGE, username is: {username}</h1>;
};
