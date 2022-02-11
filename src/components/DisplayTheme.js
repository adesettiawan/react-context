import React from "react";
import { useAppContext } from "../context/AppContext";

const DisplayTheme = () => {
    const [state] = useAppContext();

    return <>{state.theme}</>;
};

export default DisplayTheme;
