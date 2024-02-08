import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
const Dashboard = React.lazy(() => import('./components/Dashboard'));
const Landing = React.lazy(() => import('./components/Landing'));
function Routing() {
  return (
    <div>
      <BrowserRouter>
        <App2 />

        <Routes>
          <Route
            path='/'
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <Landing />
              </Suspense>
            }
          />
          <Route
            path='/dashboard'
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <Dashboard />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function App2() {
  const navigate = useNavigate();
  return (
    <div className='bg-black text-white w-full'>
      <button
        onClick={() => {
          navigate('/dashboard');
        }}
        className='m-10 p-3 border cursor-pointer border-red-50'
      >
        Dashboard
      </button>
      <button
        onClick={() => {
          navigate('/');
        }}
        className='m-10 p-3 cursor-pointer border border-red-50'
      >
        Landing
      </button>
    </div>
  );
}

export default Routing;
