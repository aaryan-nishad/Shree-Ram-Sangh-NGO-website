import { Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar.jsx';
import Home from './pages/Home.jsx';
import TopBar from './components/layout/Topbar.jsx';
import About from './pages/About.jsx';
import Missions from './pages/Missions.jsx';

function App() {
  return (
    <div className="min-h-screen bg-background text-text">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/missions/mission-01" element={<Missions />} />
          <Route path="/missions/mission-02" element={<Missions />} />
          <Route path="/missions/mission-03" element={<Missions />} />
          <Route path="/missions/mission-04" element={<Missions />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
