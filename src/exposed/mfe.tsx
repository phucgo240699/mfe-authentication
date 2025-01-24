import './index.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { SuspenseLayer } from '@/components/SuspenseLayer';

const SignInPage = React.lazy(() => import('@/pages/signIn'));
const SignUpPage = React.lazy(() => import('@/pages/signUp'));

export interface MfeAppProps {
  tokenCallback?: (accessToken: string) => void;
}

const App: React.FC<MfeAppProps> = ({ tokenCallback }) => {
  return (
    <BrowserRouter basename="/auth">
      <Routes>
        <Route
          path="/"
          element={<SignInPage onSignInSuccess={tokenCallback} />}
        />
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
  );
};

export default App;
