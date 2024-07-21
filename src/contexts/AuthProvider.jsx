import { createContext, useCallback, useContext, useReducer } from "react";

const FAKE_USER = {
  FullName: "jane Allen",
  email: "janeallen33@example.com",
  password: "qwerty234",
};
const Authentication = createContext();
const initialState = {
  isAuthenticated: false,
  error: "",
};
const callback = function (state, action) {
  switch (action.type) {
    case "error":
      return {
        ...state,
        error: action.payLoad,
      };
    case "login/user":
      return {
        ...state,
        isAuthenticated: true,
      };
    case "logout/user":
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      throw new Error("Unknown action");
  }
};

function AuthProvider({ children }) {
  const [{ isAuthenticated, error }, dispatch] = useReducer(
    callback,
    initialState
  );
  const login = useCallback(function login(user) {
    if (
      FAKE_USER.email.toLowerCase() === user.email.toLowerCase() &&
      FAKE_USER.password.toLowerCase() === user.password.toLowerCase()
    )
      dispatch({ type: "login/user" });
    else dispatch({ type: "error", payLoad: "incorrect email or password" });
  }, []);

  const logout = useCallback(function logout() {
    dispatch({ type: "logout/user" });
  }, []);

  return (
    <Authentication.Provider
      value={{
        login,
        logout,
        isAuthenticated,
        error,
      }}
    >
      {children}
    </Authentication.Provider>
  );
}

function useAuth() {
  const context = useContext(Authentication);
  if (context === undefined)
    throw new Error("Authentication was use outside of it provider");
  return context;
}

export { AuthProvider, useAuth };
