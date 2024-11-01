import React from 'react';

function Login() {
  return (
    <>
     <div className="min-h-screen bg-blue-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-gray-50 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800">Masuk</h2>
        <p className="mt-2 text-center text-gray-600">
          Jika belum memiliki akun silahkan{' '}
          <a href="#" className="text-blue-600 hover:underline">Daftar di sini</a>.
        </p>
        <form action="/api/register" method="POST" className="mt-6">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1 block w-full p-2 border rounded-md bg-white focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="mt-1 block w-full p-2 border rounded-md bg-white focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password_confirmation" className="block text-gray-700">Konfirmasi Password</label>
            <input
              type="password"
              name="password_confirmation"
              id="password_confirmation"
              className="mt-1 block w-full p-2 border rounded-md bg-white focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none transition duration-300"
          >
            Masuk
          </button>
        </form>
        <div className="mt-6 text-center">
          <a href="#" className="text-gray-600 hover:underline">Kembali</a>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
