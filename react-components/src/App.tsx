import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Catalog from './components/Catalog';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Catalog />}>
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
// export function WrappedApp() {
//   return <App />;
// }

export default App;
