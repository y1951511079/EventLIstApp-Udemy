import './App.css';
import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/page1">Page1</Link>
        <Link to="/page2">Page2</Link>
        <Router />
      </BrowserRouter>
    </>
  );
}
export default App;
