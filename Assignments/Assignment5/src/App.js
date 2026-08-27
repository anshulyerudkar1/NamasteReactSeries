import ReactDom from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import "../index.css";

const AppLayout = () => {
    return (
        <div className="App">
            <Header/>
            <Body />
        </div>
    )
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
