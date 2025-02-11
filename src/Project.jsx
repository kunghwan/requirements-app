import { useParams } from "react-router-dom";

const Project = () => {
  const { projectId } = useParams();
  console.log(projectId);

  return (
    <div>
      <h1>Project:{projectId}</h1>
    </div>
  );
};

export default Project;
