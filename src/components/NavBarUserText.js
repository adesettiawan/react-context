import React from "react";
import { useAppContext } from "../context/AppContext";

const NavBarUserText = () => {
    const [state] = useAppContext();

    return (
        <>
            <span>Hi, {state?.user?.name}!</span>
        </>
    );
};

export default NavBarUserText;
