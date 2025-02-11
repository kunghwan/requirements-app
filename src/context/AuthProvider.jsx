import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { authContext } from "./useAuth";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log({ user });
  }, [user]);

  return (
    <authContext.Provider value={{ user, setUser }}>
      {children}
    </authContext.Provider>
  );
};

AuthProvider.PropTypes = {
  children: PropTypes.element,
};
