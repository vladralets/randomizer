import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSignIn = async (): Promise<void> => {
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Успешный вход:", res.user);
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.error("Ошибка при входе:", error.message);
      } else {
        console.error("Неизвестная ошибка при входе:", error);
      }
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: 300 }}>
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>
      <div style={{ marginTop: 16 }}>
        <button onClick={handleSignIn} style={{ marginLeft: 8 }}>
          Sign In
        </button>
      </div>
    </div>
  );
}
