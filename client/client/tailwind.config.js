/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    // Text colors
    'text-blue-100', 'text-blue-200', 'text-blue-500', 'text-blue-600', 'text-blue-700', 'text-blue-800',
    'text-green-100', 'text-green-200', 'text-green-500', 'text-green-600', 'text-green-700', 'text-green-800',
    'text-purple-100', 'text-purple-200', 'text-purple-500', 'text-purple-600', 'text-purple-700', 'text-purple-800',
    'text-red-100', 'text-red-200', 'text-red-500', 'text-red-600', 'text-red-700', 'text-red-800',
    'text-orange-100', 'text-orange-200', 'text-orange-500', 'text-orange-600', 'text-orange-700', 'text-orange-800',
    'text-pink-100', 'text-pink-200', 'text-pink-500', 'text-pink-600', 'text-pink-700', 'text-pink-800',
    'text-indigo-100', 'text-indigo-200', 'text-indigo-500', 'text-indigo-600', 'text-indigo-700', 'text-indigo-800',
    'text-gray-100', 'text-gray-200', 'text-gray-500', 'text-gray-600', 'text-gray-700', 'text-gray-800',
    
    // Background colors
    'bg-blue-100', 'bg-blue-200', 'bg-blue-500', 'bg-blue-600', 'bg-blue-700', 'bg-blue-800',
    'bg-green-100', 'bg-green-200', 'bg-green-500', 'bg-green-600', 'bg-green-700', 'bg-green-800',
    'bg-purple-100', 'bg-purple-200', 'bg-purple-500', 'bg-purple-600', 'bg-purple-700', 'bg-purple-800',
    'bg-red-100', 'bg-red-200', 'bg-red-500', 'bg-red-600', 'bg-red-700', 'bg-red-800',
    'bg-orange-100', 'bg-orange-200', 'bg-orange-500', 'bg-orange-600', 'bg-orange-700', 'bg-orange-800',
    'bg-pink-100', 'bg-pink-200', 'bg-pink-500', 'bg-pink-600', 'bg-pink-700', 'bg-pink-800',
    'bg-indigo-100', 'bg-indigo-200', 'bg-indigo-500', 'bg-indigo-600', 'bg-indigo-700', 'bg-indigo-800',
    'bg-gray-100', 'bg-gray-200', 'bg-gray-500', 'bg-gray-600', 'bg-gray-700', 'bg-gray-800',
    
    // Hover colors
    'hover:bg-blue-100', 'hover:bg-blue-200', 'hover:bg-blue-500', 'hover:bg-blue-600', 'hover:bg-blue-700', 'hover:bg-blue-800',
    'hover:bg-green-100', 'hover:bg-green-200', 'hover:bg-green-500', 'hover:bg-green-600', 'hover:bg-green-700', 'hover:bg-green-800',
    'hover:bg-purple-100', 'hover:bg-purple-200', 'hover:bg-purple-500', 'hover:bg-purple-600', 'hover:bg-purple-700', 'hover:bg-purple-800',
    'hover:bg-red-100', 'hover:bg-red-200', 'hover:bg-red-500', 'hover:bg-red-600', 'hover:bg-red-700', 'hover:bg-red-800',
    'hover:bg-orange-100', 'hover:bg-orange-200', 'hover:bg-orange-500', 'hover:bg-orange-600', 'hover:bg-orange-700', 'hover:bg-orange-800',
    'hover:bg-pink-100', 'hover:bg-pink-200', 'hover:bg-pink-500', 'hover:bg-pink-600', 'hover:bg-pink-700', 'hover:bg-pink-800',
    'hover:bg-indigo-100', 'hover:bg-indigo-200', 'hover:bg-indigo-500', 'hover:bg-indigo-600', 'hover:bg-indigo-700', 'hover:bg-indigo-800',
    'hover:bg-gray-100', 'hover:bg-gray-200', 'hover:bg-gray-500', 'hover:bg-gray-600', 'hover:bg-gray-700', 'hover:bg-gray-800',
    
    // Border colors
    'border-blue-100', 'border-blue-200', 'border-blue-500', 'border-blue-600', 'border-blue-700', 'border-blue-800',
    'border-green-100', 'border-green-200', 'border-green-500', 'border-green-600', 'border-green-700', 'border-green-800',
    'border-purple-100', 'border-purple-200', 'border-purple-500', 'border-purple-600', 'border-purple-700', 'border-purple-800',
    'border-red-100', 'border-red-200', 'border-red-500', 'border-red-600', 'border-red-700', 'border-red-800',
    'border-orange-100', 'border-orange-200', 'border-orange-500', 'border-orange-600', 'border-orange-700', 'border-orange-800',
    'border-pink-100', 'border-pink-200', 'border-pink-500', 'border-pink-600', 'border-pink-700', 'border-pink-800',
    'border-indigo-100', 'border-indigo-200', 'border-indigo-500', 'border-indigo-600', 'border-indigo-700', 'border-indigo-800',
    'border-gray-100', 'border-gray-200', 'border-gray-500', 'border-gray-600', 'border-gray-700', 'border-gray-800',
  ],
  theme: {
    extend: {},
  },
  plugins: [{ tailwindcss: {}, autoprefixer: {} }],
} 