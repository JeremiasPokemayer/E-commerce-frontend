import { createContext, useContext, useState } from "react";

interface User {
  userId?: string;
  email?: string;
  username?: string;
  lastname?: string;
  address?: string;
  phone?: string;
}

interface UserContextType {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  product: {} | null;
  setProduct: React.Dispatch<React.SetStateAction<{} | null>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export default function UserProvider({ children }) {
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [code, setCode] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [product, setProduct] = useState<{} | null>(null);

  return (
    <UserContext.Provider
      value={{
        email,
        setEmail,
        code,
        setCode,
        query,
        setQuery,
        user,
        setUser,
        product,
        setProduct,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un UserProvider");
  }
  return context;
}
