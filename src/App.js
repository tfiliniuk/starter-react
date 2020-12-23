import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AppRouting } from 'pages/App.routing';

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRouting />
      </BrowserRouter>
      <ToastContainer autoClose={2000} />
    </>
  );
}

export default App;
