import React, { useState } from "react";

const ProfileContext = React.createContext<any>({
  profile: null,
  setProfile: () => {},
});

export function ProfileProvider({ children }: React.PropsWithChildren<{}>) {
  const [profile, setProfile] = useState(null);

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfileContext() {
  return React.useContext(ProfileContext);
}
