'use client';
import { createContext, useContext, useState } from 'react';

const ProjectContext = createContext(null);

export function ProjectProvider({ children }) {
  const [openId, setOpenId] = useState(null);
  return (
    <ProjectContext.Provider value={{ openId, setOpenId }}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProject() {
  return useContext(ProjectContext);
}
