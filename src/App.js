import { Routes, Route } from "react-router-dom";

import AuthFrontend from "./components/AuthFrontend";
import Home from "./containers/Home";
import Login from "./containers/Login";
// import Main from "./containers/Main";
import MovieData from "./containers/MovieData";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <AuthFrontend>
              <Home />
            </AuthFrontend>
          }
        />
        <Route
          path="/login"
          element={
            <AuthFrontend>
              <Login />
            </AuthFrontend>
          }
        />
        
        <Route
          path="/home"
          element={
            <AuthFrontend>
              <Home />
            </AuthFrontend>
          }
        />
        <Route
          path="/resep/key"
          element={
            <AuthFrontend>
              <MovieData />
            </AuthFrontend>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
