import { useAppContext } from "../context/AppContext";

export default function Setting() {
    const [state, dispatch] = useAppContext();

    return (
        <>
            <input
                type="text"
                value={state.user.name}
                onChange={(e) => {
                    dispatch({
                        type: "updateUser",
                        payload: { ...state.user, name: e.target.value },
                    });
                }}
                placeholder="Change Name"
            />
        </>
    );
}
