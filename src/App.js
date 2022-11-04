import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Profile } from './pages/profile/Profile';
import { Notfound } from "./pages/notfound/Notfound";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <div>
        <Link to={'/profile'}>My Profile</Link>
        <Link to={'/'}>Home page</Link>
        <Routes>
            <Route path={'/'} element={<Home />}/>
            <Route path={'/profile'} element={<Profile />}/>
            <Route path={'*'} element={<Notfound />}/>
        </Routes>
    </div>
  );
}

export default App;
