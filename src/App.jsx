import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import PrivateRoute from "./component/PrivateRoute";
import Dashboard from "./component/Dashboard";
import SignUp from "./component/SignUp";
import Login from "./component/Login";


function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
