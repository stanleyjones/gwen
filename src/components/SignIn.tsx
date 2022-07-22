import { Dispatch, SetStateAction } from "react";
import { decodeJwt } from "jose";
import { useExternalScript } from "../hooks";
import { useProfileContext } from "../providers/ProfileProvider";
import "./SignIn.css";

declare global {
  interface Window {
    google: any;
  }
}

const GOOGLE_CLIENT_LIBRARY = "https://accounts.google.com/gsi/client";
const GOOGLE_CLIENT_ID =
  "106980216616-kcvcr1nt0qep7oab6gt0s3ukbkqtc255.apps.googleusercontent.com";

const handleLoaded = (setProfile: Dispatch<SetStateAction<any>>) => {
  const google = window.google || {};
  google.accounts.id.initialize({
    client_id: GOOGLE_CLIENT_ID,
    callback: (res: any) => {
      const profile = decodeJwt(res.credential);
      setProfile(profile);
    },
  });
  google.accounts.id.renderButton(document.getElementById("signInWithGoogle"), {
    text: "continue_with",
  });
};

export function SignIn() {
  const { _, setProfile } = useProfileContext();
  useExternalScript(GOOGLE_CLIENT_LIBRARY, () => handleLoaded(setProfile));
  return (
    <div className="SignIn">
      <h1>Sign In</h1>
      <div id="signInWithGoogle">.</div>
    </div>
  );
}
