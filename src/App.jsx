import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

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

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'hsl(234, 29%, 20%)',
            color: '#fff',
          },
        }}
      />
    </>
  );
}

export default App;
