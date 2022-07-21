import React from "react";

interface ISignIn {
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export function SignIn({ setAuthenticated }: ISignIn) {
  return (
    <>
      <div className="placeholder">[SIGN IN]</div>
      <button onClick={() => setAuthenticated(true)}>
        Continue with Google
      </button>
    </>
  );
}
