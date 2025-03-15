import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import AdminPanel from "./AdminPannel";
import UserPanel from "./UserPannel";

function Dashboard() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const isAdmin = currentUser?.email === "admin@gmail.com";

  async function handleLogout() {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="dashboard-header">

      <h1>dashboard</h1>

      <button onClick={handleLogout}>Logout</button>
      {isAdmin ? <AdminPanel /> : <UserPanel />}
    </div>
  );
}

export default Dashboard;
