import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Catalog from './components/Catalog';
import NotFound from './components/NotFound';
import MainLayout from './layouts/MainLayout';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Catalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
