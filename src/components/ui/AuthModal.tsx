import { useState } from "react";

const AuthModal = ({ onAuthenticated }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.toLowerCase() === "password") {
      const authData = {
        authenticated: true,
        timestamp: new Date().getTime(),
      };
      localStorage.setItem("authData", JSON.stringify(authData));
      onAuthenticated(true);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md transform transition-all duration-300 ease-in-out">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome</h2>
          <p className="text-gray-500 mb-6">Please enter your ID to continue</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Enter your ID"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200
                  ${
                    error
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300"
                  }`}
              />
              {error && (
                <div className="flex items-center mt-2 text-red-500 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span>Invalid ID. Please try again.</span>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg
                transition-colors duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Continue
            </button>
          </form>

          <div className="mt-4 text-center text-sm text-gray-500">
            {/* <p>Hint: The ID is &quot;password&quot;</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuthModal;
