import { useContext, createContext } from "react";

export const projectContext = createContext({
  projects: [],
  setProjects: () => ({}),
});

const useProject = () => useContext(projectContext);
// 리엑트에서 직접 제공하는 훅이여서 useContext 앞에 중괄호 쓰지 않음

export default useProject;
