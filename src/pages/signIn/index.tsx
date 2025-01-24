import React from 'react';
import { signInRequest } from '@/apis/signIn';
import { NavLink } from 'react-router';
import { Spinner } from '@/components/Spinner';

interface SignInFormProps {
  onSignInSuccess?: (accessToken: string) => void;
}

const SignInPage: React.FC<SignInFormProps> = ({ onSignInSuccess }) => {
  const [loading, setLoading] = React.useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setLoading(true);
      const formData = new FormData(e.currentTarget);
      const email = formData.get('email') as string;
      const password = formData.get('password') as string;
      const { accessToken } = await signInRequest(email, password);
      onSignInSuccess?.(accessToken);
    } catch (error) {
      alert('Sign in failed');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center p-14">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="flex items-center gap-3 h-10 justify-center w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            <span>Sign In</span>
            <Spinner show={loading} size="sm" contrast="light" />
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{' '}
          <NavLink to={'/sign-up'} className="text-blue-500">
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
