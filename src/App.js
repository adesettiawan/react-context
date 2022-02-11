import "./App.css";
import DisplayTheme from "./components/DisplayTheme";
import NavBar from "./components/NavBar";
// import Reducer from "./components/Reducer";
import Setting from "./components/Setting";
import ToggleTheme from "./components/ToggleTheme";
import { AppProvider } from "./context/AppContext";

function App() {
    return (
        <div className="App">
            {/* <Reducer /> */}
            <AppProvider>
                <NavBar />
                <hr />
                <Setting />
                <hr />
                <DisplayTheme />
                <hr />
                <ToggleTheme />
            </AppProvider>
        </div>
    );
}

export default App;
