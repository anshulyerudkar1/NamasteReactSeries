import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import "../index.css";

const App = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
