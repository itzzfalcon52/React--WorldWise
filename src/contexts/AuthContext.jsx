import { createContext, useContext, useReducer, useEffect } from "react";
import { supabase } from "../SupabaseAuth";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        error: null,
      };

    case "logout":
      return { ...state, user: null, isAuthenticated: false, error: null };

    case "error":
      return { ...state, error: action.payload };

    default:
      throw new Error("unknown Error");
  }
}

function AuthProvider({ children }) {
  const [{ user, isAuthenticated, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        dispatch({ type: "login", payload: session.user });
      }
    });

    // ✅ Listen to login/logout events
    const { data: subscription } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session?.user) {
          dispatch({ type: "login", payload: session.user });
        } else {
          dispatch({ type: "logout" });
        }
      }
    );

    return () => subscription.subscription.unsubscribe();
  }, []);

  async function login(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      dispatch({ type: "error", payload: error.message });
    } else {
      dispatch({ type: "login", payload: data.user ?? data.session?.user });
    }
  }

  async function signup(email, password) {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      dispatch({ type: "error", payload: error.message });
      return false;
    } else {
      // User must confirm via email (if email confirmation is enabled)
      return true;
    }
  }

  async function logout() {
    await supabase.auth.signOut();
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider
      value={{ login, logout, isAuthenticated, error, signup, user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("context was used outside the element");
  return context;
}
export { useAuth, AuthProvider };
