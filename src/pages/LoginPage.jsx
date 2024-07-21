import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import { useEffect, useState } from "react";
import Logo from "../componets/Logo";
function LoginForm() {
  const [password, setPassword] = useState("qwerty234");
  const [email, setEmail] = useState("janeallen33@example.com");
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = function (e) {
    e.preventDefault();
    const formInput = e.target.querySelectorAll("input");
    const user = { email: formInput[0].value, password: formInput[1].value };
    if (user.email === "" && user.password === "") return;
    login(user);
    setEmail("");
    setPassword("");
  };
  useEffect(() => {
    if (isAuthenticated) navigate("/city", { replace: true });
  }, [isAuthenticated, navigate]);
  return (
    <div className="mt-8">
      <form onSubmit={handleSubmit}>
        <div>
          <label
            for="email"
            className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@example.com"
            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300  dark:focus:border-primary focus:ring-primary/75 focus:outline-none focus:ring focus:ring-opacity-40"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mt-6">
          <div className="flex justify-between mb-2">
            <label
              for="password"
              className="text-sm text-gray-600 dark:text-gray-200"
            >
              Password
            </label>
            <a
              href="forgot-password"
              className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
            >
              Forgot password?
            </a>
          </div>

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300  dark:focus:border-primary focus:ring-primary/75 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="mt-6">
          <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-primary rounded-lg hover:bg-primary/75 focus:outline-none  focus:ring-opacity-50">
            Sign in
          </button>
        </div>
      </form>

      <p className="mt-6 text-sm text-center text-gray-400">
        Don&#x27;t have an account yet?{" "}
        <Link
          to="/register"
          className="text-blue-500 focus:outline-none focus:underline hover:underline"
        >
          Sign up
        </Link>
        .
      </p>
    </div>
  );
}

function LoginPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="flex justify-center h-screen">
        <div
          className="hidden bg-cover lg:block lg:w-1/2"
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/238622/pexels-photo-238622.jpeg?auto=compress&cs=tinysrgb&w=600`,
          }}
        >
          <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Travaye{" "}
              </h2>

              <p className="max-w-xl mt-3 text-gray-100">
                Log in to access your account and continue your journey with us.
                Whether you're checking your bookings, managing your
                preferences, or exploring new travel plans, we're here to make
                your experience seamless and enjoyable. Don't have an account
                yet? Join us today and start your adventure!
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <div className="flex justify-center mx-auto">
                <Logo />
              </div>

              <p className="mt-3 text-gray-500 dark:text-gray-300">
                Sign in to access your account
              </p>
            </div>

            {/* {} */}
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
