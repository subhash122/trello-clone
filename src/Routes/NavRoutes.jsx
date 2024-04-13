import { Routes, Route, Navigate } from "react-router-dom";
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import Dashboard from '../Components/Dashboard/Dashboard';
import Project from '../Components/Project/Project';
import PrivateRoute from './PrivateRoute';

function NavRoutes() {
  return (
    <Routes>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<Register />}></Route>
      <Route element={<PrivateRoute />}>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/project/:id' element={<Project />}></Route>
      </Route>

      <Route path="/" element={<Navigate to="/dashboard" replace />}></Route>
    </Routes>
  )
}

export default NavRoutes
