import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import { useDispatch, useSelector } from "react-redux";
import { getAuthUser } from "./JS/Actions/authActions";
import EditUser from "./Components/Auth/EditUser";
function App() {
  const token = localStorage.getItem("token");

  const dispatch = useDispatch();

  useEffect(() => {
    token && dispatch(getAuthUser());
  }, [dispatch, token]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="//Profile/:id" component={EditUser} />
          <Route path="/login" component={Login} />
          <Route path="/CreateAccount" component={Register} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
