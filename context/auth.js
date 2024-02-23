import { useRouter, useSegments } from "expo-router";
import { useContext, useState, createContext, useEffect } from "react";

const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(undefined);
  const router = useRouter();
  const rootSegment = useSegments()[0];
  console.log(rootSegment);

  useEffect(() => {
    if (!user && rootSegment !== "(auth)") {
      console.log("runned");
      return router.replace("/login");
    }
    if (user && rootSegment !== "(app)") {
      return router.replace("/");
    }
  }, [user, rootSegment]);

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn: () => setUser("Enes"),
        signOut: () => setUser(undefined),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
