import { Routes, Route } from "react-router-dom";
import AuthBackend from "./components/AuthBackend";
import AuthFrontend from "./components/AuthFrontend";
import Home from "./containers/Home";
import Login from "./containers/Login";
// import Main from "./containers/Main";
import MovieData from "./containers/MovieData";
import Registration from "./containers/Registration";

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
          path="/registration"
          element={
            <AuthFrontend>
              <Registration />
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
          path="/movie/:id"
          element={
            <AuthBackend>
              <MovieData />
            </AuthBackend>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
