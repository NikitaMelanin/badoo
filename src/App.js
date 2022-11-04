import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Profile } from './pages/profile/Profile';
import { Notfound } from "./pages/notfound/Notfound";
import { Home } from "./pages/home/Home";
import { Header } from "./components/Header";
import Nav from 'react-bootstrap/Nav';
import Postpage from "./pages/home/components/posts/Postpage";

function App() {
  return (
    <div>
        <Header>
            <Nav.Link><Link to={'/'} className={'inheritAll'}>Starter page</Link></Nav.Link>
            <Nav.Link><Link to={'/search'} className={'inheritAll'}>Search second half</Link></Nav.Link>
            <Nav.Link><Link to={'/profile'} className={'inheritAll'}>My Profile</Link></Nav.Link>
            <Nav.Link><Link to={'/shop'} className={'inheritAll'}>Buy Premium</Link></Nav.Link>
        </Header>
        <Routes>
            <Route path={'/'} element={<Home />}/>
            <Route path={'/profile'} element={<Profile />}/>
            <Route path={'/dev-blog-post/:id'} element={<Postpage />}/>
            <Route path={'*'} element={<Notfound />}/>
        </Routes>
    </div>
  );
}

export default App;
