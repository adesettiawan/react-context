import React from "react";
import NavBarLink from "./NavBarLink";
import NavBarUser from "./NavBarUser";

const NavBar = () => {
    return (
        <>
            {/* <NavBarLink>Dashboard</NavBarLink> |{" "}
            <NavBarLink>Profile</NavBarLink> */}
            <NavBarLink>
                <NavBarUser />
            </NavBarLink>
        </>
    );
};

export default NavBar;
