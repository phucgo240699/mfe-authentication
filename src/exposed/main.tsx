import './index.css';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { SuspenseLayer } from '@/components/SuspenseLayer';

const SignInPage = React.lazy(() => import('@/pages/signIn'));
const SignUpPage = React.lazy(() => import('@/pages/signUp'));

const App: React.FC = () => {
  return (
    <SuspenseLayer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={'/sign-in'} />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route
            path="/sign-up"
            element={
              <SuspenseLayer>
                <SignUpPage />
              </SuspenseLayer>
            }
          />
        </Routes>
      </BrowserRouter>
    </SuspenseLayer>
  );
};

export default App;
