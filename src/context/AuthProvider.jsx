import PropTypes from "prop-types";
// PropTypes는 React에서 컴포넌트의 props의 타입을 정의하고 검사하기
//  위한 도구입니다. 이를 사용하면, 컴포넌트에 전달되는 props가 예상한 타입인지 검증하고,
//  개발 중에 잘못된 데이터가 전달될 경우 경고 메시지를 출력
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
