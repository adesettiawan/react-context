import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";

const ChangeProfile = () => {
  const [newUsername, setNewUsername] = useState("");

  const { setUsername } = useAppContext();

  return (
    <>
      <input type="text" onChange={(e) => setNewUsername(e.target.value)} />
      <button onClick={() => setUsername(newUsername)}>Change Username</button>
    </>
  );
};

export default ChangeProfile;
