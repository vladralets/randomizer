import { onAuthStateChanged, User } from "firebase/auth";
import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";
import { auth } from "../firebase";
  
  type AuthContextType = {
    currentUser: User | null;
  };
  
  const AuthContext = createContext<AuthContextType>({
    currentUser: null,
  });
  
  type AuthProviderProps = {
    children: ReactNode;
  };
  
  export function AuthProvider({ children }: AuthProviderProps) {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
        setLoading(false);
      });
      return () => unsubscribe();
    }, []);
  
    return (
      <AuthContext.Provider value={{ currentUser }}>
        {!loading && children}
      </AuthContext.Provider>
    );
  }
  
  // eslint-disable-next-line react-refresh/only-export-components
  export function useAuth() {
    return useContext(AuthContext);
  }
  