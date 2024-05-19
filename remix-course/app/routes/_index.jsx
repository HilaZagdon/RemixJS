import React from "react";
function HelloWorld() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-primary-700 mb-4">Hello, World!</h1>
        <p className="text-lg text-gray-700 mb-6">This is a simple example of a React component styled with Tailwind CSS.</p>
        <div className="flex space-x-4">
          <button className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Click Me
          </button>
          <button className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Or Me
          </button>
        </div>
        <p className="text-gray-500 mt-4">Enjoy building with Tailwind CSS!</p>
      </div>
    </div>
  );
}
export default HelloWorld;