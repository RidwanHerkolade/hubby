import react from "react";
import { AppProvider } from "./Component/Context/ContextProvider";
import { Homepage } from "./Component/Home/Homepage";
import "./App.css";

function App() {
  return (
    <AppProvider>
      <Homepage />
    </AppProvider>
  );
}
export default App;
