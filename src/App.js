import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Routes className="App">
      <Route
        path="/"
        element={<Home />}
      />
    </Routes>
  );
}

export default App;
