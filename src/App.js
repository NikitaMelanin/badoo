import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Profile } from './pages/profile/Profile';
import { Notfound } from "./pages/notfound/Notfound";
import { Home } from "./pages/home/Home";
import Postpage from "./pages/home/components/posts/Postpage";
import RoutesLayout from './RoutesLayout';
import Shop from './pages/shop/Shop'
import AdminPanel from "./adminsPanel/AdminPanel";


function App() {
  return (
        <Routes>
          <Route path='/' element={<RoutesLayout />}>
            <Route path={'/'} element={<Home />}/>
              <Route path={'/profile/:id'} element={<Profile />}/>
              <Route path={'/dev-blog-post/:id'} element={<Postpage />}/>
              <Route path={'/shop'} element={<Shop />}/>
              <Route path={'*'} element={<Notfound />}/>
          </Route>
          <Route path='/admin' element={
              <AdminPanel />
          }>
          </Route>
        </Routes>
  );
}

export default App;
