import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Success from './pages/Success';
import PageNotFound from './pages/PageNotFound';
import SignUp from './pages/SignUp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<SignUp />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="success" element={<Success />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
