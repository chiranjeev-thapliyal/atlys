import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import HomePage from "./components/pages/HomePage";
import AuthProvider from "./contexts/auth";

function App() {
  return (
    <AuthProvider>
      <div className="app h-full">
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
