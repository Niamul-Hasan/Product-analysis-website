import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import DashBoard from './Components/DashBoard/DashBoard';
import NotFound from './Components/NotFound/NotFound';
import Review from './Components/Review/Review';
import Blogs from './Components/Blogs/Blogs';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dash" element={<DashBoard />}></Route>
        <Route path="/review" element={<Review />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

    </div>
  );
}

export default App;
