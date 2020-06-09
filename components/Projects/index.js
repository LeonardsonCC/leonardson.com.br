import React, { useState } from "react";
import axios from "axios";

import { Wrapper, Project, Title } from "./styles";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  if (projects.length <= 0) {
    axios
      .get("https://api.github.com/users/LeonardsonCC/repos")
      .then(({ data }) => {
        setProjects(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <Wrapper>
      <Title>Meu GitHub</Title>
      {projects.length > 0 ? (
        projects.map((item) => (
          <Project key={item.name} href={item.html_url} target="_blank">
            <h4>{item.name}</h4>
            <span>{item.description}</span>
          </Project>
        ))
      ) : (
        <h3>Carregando projetos...</h3>
      )}
    </Wrapper>
  );
};

export default Projects;

