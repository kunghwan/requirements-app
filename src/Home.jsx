import UserHome from "./UserHome";
import { NavLink } from "react-router-dom";
import "./Home.css";
import useAuth from "./context/useAuth";

const Home = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="non_user-home">
        <h1>아직도 EXCEL로 요구사항 작성하시나요</h1>
        <h1>아직도 APP로 요구사항 작성하시나요</h1>
        <NavLink to="/login" className="link">
          정의로운 요구사항 작성 시작하기
        </NavLink>
      </div>
    );
  }

  return <UserHome />;
};

export default Home;
