'use client';
import { useState, FormEvent } from "react";
import { useRouter } from 'next/navigation';
import Header from '../components/ui/Headers'; // Import the Header component

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);

    // Redirect to dashboard after successful login
    router.push('/dashboard');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Include Header Component */}
      <Header username="User" />

      <div className="flex items-center justify-center flex-grow">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-semibold text-center mb-4 text-black">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded mt-1 text-gray-900"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded mt-1 text-gray-900"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
