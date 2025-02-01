import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Login from './pages/Login'; // ✅ Importar el componente
import { AuthProvider } from './AuthContext';
import PrivateRoute from './pages/PrivateRoute';
import ProtectedPage from './pages/ProtectedPages';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="protected" element={<PrivateRoute><ProtectedPage/></PrivateRoute>} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
