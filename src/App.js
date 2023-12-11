//import UI
import { Button } from 'antd-mobile'
//import Router
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//import pages
import Home from './pages/Home'
import CityList from './pages/CityList';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          {/* Use Link components for navigation */}
          <li>
            <Link to="/Home">首页</Link>
          </li>
          <li>
            <Link to="/CityList">城市选择页面</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/Home/*" element={<Home />} />
        <Route path="/CityList" element={<CityList />} />
      </Routes>
    </Router>
  );
}

export default App;
