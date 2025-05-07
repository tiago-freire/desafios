import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register/index';
import Home from '../pages/Home/index';
import MovieDetails from '../pages/MovieDetails';
import { useAuth } from '../contexts/AuthContext';

const AppRoutes = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return null;

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {isAuthenticated ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/filme/:id" element={<MovieDetails />} />
        </>
      ) : (
        <Route path="*" element={<Navigate to="/login" replace />} />
      )}
    </Routes>
  );
};

export default AppRoutes;
