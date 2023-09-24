import { useState } from "react";
import Login from "./components/login";
import SignUp from "./components/signup";

export default function Auth() {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <div>
      {showSignUp ? (
        <SignUp
          onSignUp={() => {
            setShowSignUp(false);
          }}
        />
      ) : (
        <Login />
      )}
      <p
        onClick={() => setShowSignUp(!showSignUp)}
        style={{ cursor: "pointer" }}
      >
        {showSignUp ? "Already have an account? Sign in" : "New here? Sign up"}
      </p>
    </div>
  );
}