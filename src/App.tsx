import React from "react";
import Main from "./pages/Main";
import Details from "./pages/Details";
import History from "./pages/History";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { AppContext } from "./context/AppContext";

function App() {
  return (
    <div className="App">
      <div className="page">
        <AppContext>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="details/:name" element={<Details />} />
              <Route path="/history" element={<History />} />
            </Routes>
          </BrowserRouter>
        </AppContext>
      </div>
    </div>
  );
}

export default App;
