import "./UserHome.css";
import { NavLink } from "react-router-dom";
import useProject from "./context/useProject";

const UserHome = () => {
  const { projects } = useProject();

  return (
    <div className="user-homes">
      <h1>UserHome</h1>
      {projects.map((project, index) => {
        return (
          <div key={project.id} to={project.id} className="link">
            {index + 1}.{project.title}.{project.id}
          </div>
        );
      })}
    </div>
  );
};

export default UserHome;
