import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavRoutes from './Routes/NavRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer position="top-center" />
      <BrowserRouter>
        <NavRoutes></NavRoutes>
      </BrowserRouter>

    </>
  );
}

export default App;
