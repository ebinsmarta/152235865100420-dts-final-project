import { Routes, Route } from "react-router-dom";
import AuthBackend from "./components/AuthBackend";
import AuthFrontend from "./components/AuthFrontend";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Search from "./containers/Search";
 import Main from "./containers/Main";
import Registration from "./containers/Registration";
import MovieData from "./containers/MovieData";
import SearchData from "./containers/SearchData";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <AuthFrontend>
              <Main />
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
          path="/login"
          element={
            <AuthFrontend>
              <Login />
            </AuthFrontend>
          }
        />
        <Route
          path="/cari"
          element={
            <AuthFrontend>
              <Search />
            </AuthFrontend>
          }
        />

<Route
          path="/search"
          element={
            <AuthFrontend>
              <SearchData />
            </AuthFrontend>
          }
        />
        
        <Route
          path="/home"
          element={
            <AuthBackend>
              <Home />
            </AuthBackend>
          }
        />
        <Route
          path="/resep/:key"
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
