import { createContext, useContext, useEffect, useReducer } from "react";

// untuk memecahkan masalah rerender pada component yang tidak seharusnya dirender maka pada react-context
// cara nya yaitu split / pisahkan setiap statenya contoh case dibawah ini yaitu
// user dan theme, harus dipisahkan untuk mengatasi rerender yang berulan
// atau bisa menggunakan useMemo pada react js

export const AppContext = createContext();

export function useAppContext() {
    return useContext(AppContext);
}

function reducer(state, action) {
    switch (action.type) {
        case "updateUser":
            return { ...state, user: action.payload };
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
    user: {},
    theme: "dark",
};
export function AppProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const user = {
            name: "Jhon Doe",
            avatar: "https://cdn.kibrispdr.org/data/gambar-icon-user-0.jpg",
        };

        dispatch({
            type: "updateUser",
            payload: user,
        });
    }, []);

    const AppContextValue = [state, dispatch];

    return (
        <AppContext.Provider value={AppContextValue}>
            {children}
        </AppContext.Provider>
    );
}
