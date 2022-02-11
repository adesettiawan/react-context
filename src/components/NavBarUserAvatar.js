import React from "react";
import { useAppContext } from "../context/AppContext";

const NavBarUserAvatar = () => {
    const [state] = useAppContext();
    return (
        <>
            <img
                src={state.user.avatar}
                alt="avatar"
                width="100"
                height="100"
            />
        </>
    );
};

export default NavBarUserAvatar;
