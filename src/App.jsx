import { Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar.jsx';
import Home from './pages/Home.jsx';
import TopBar from './components/layout/Topbar.jsx';

function App() {
  return (
    <div className="min-h-screen bg-background text-text">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
