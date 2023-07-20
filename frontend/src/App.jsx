import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Select from "./pages/Select";

import { CurrentUserProvider } from "./contexts/CurrentUser";

import "./style/header.css";
import "./style/home.css";
import "./style/select.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <CurrentUserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/select" element={<Select />} />
        </Routes>
      </CurrentUserProvider>
    </div>
  );
}

export default App;
