import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import "../index.css";


const App = () => {
    return (
        <Header />
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);