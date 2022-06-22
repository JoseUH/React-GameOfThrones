import { useState } from "react";
import { login } from "./auth/auth";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navigator from "./core/Navigator";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import RequiredAuth from "./components/RequiredAuth";
import { SWContextProvider } from "./context/context";


function App() {
  const [user, setUser] = useState(null);
  
  const authenticated = user != null;

  const loginUser = ({ email, password }) =>
    setUser(login({ email, password }));

  const logoutUser = () => setUser(null);

  return (
    <div className="App">
      <Router>
      <SWContextProvider>
        <Navigator authenticated={authenticated} logoutUser={logoutUser} />
        
        
        <Routes>
          <Route path="/" element={<Home />} />
       
          <Route
            path="/gallery"
            element={
              <RequiredAuth authenticated={authenticated}>
                <Gallery />
              </RequiredAuth>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login loginUser={loginUser} />} />
        </Routes>
</SWContextProvider>
      </Router>
      
    </div>
  );
}

export default App;
