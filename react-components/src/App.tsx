import { Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import Catalog from './pages/Catalog/Catalog';
import NotFound from './pages/NotFound/NotFound';
import MainLayout from './layouts/MainLayout';
import FormPage from './pages/FormPage/FormPage';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<MainLayout />}>
//           <Route index element={<Catalog />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/form" element={<FormPage />} />
//           <Route path="/*" element={<NotFound />} />
//         </Route>
//       </Routes>
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <div className="App">
      <About />
    </div>
  );
}

export default App;
