import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import HOME from './Pages/Home';
import Success from './Pages/Success';
import NotFound from './Pages/NotFound';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HOME />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default App
