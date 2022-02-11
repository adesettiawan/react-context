import { createContext, useContext, useReducer } from "react";

export const ThemeContext = createContext();

export function useThemeContext() {
    return useContext(ThemeContext);
}

function reducer(state, action) {
    switch (action.type) {
        case "toggleTheme":
            return {
                ...state,
                theme: state.theme === "dark" ? "light" : "dark",
            };
        default:
            throw new Error("data tidak ada");
    }
}

const initialState = {
    theme: "dark",
};
export function AppProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const ThemeContextValue = [state, dispatch];

    return (
        <ThemeContext.Provider value={ThemeContextValue}>
            {children}
        </ThemeContext.Provider>
    );
}
