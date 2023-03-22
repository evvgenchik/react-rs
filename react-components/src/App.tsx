import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Catalog from './pages/Catalog';
import NotFound from './pages/NotFound';
import MainLayout from './layouts/MainLayout';
import Form from './pages/Form/Form';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Catalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<Form />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
