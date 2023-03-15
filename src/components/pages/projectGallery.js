import React from "react";
import projects from "../projects.json"
import Project from "./Project";

// const styles = {
//   projectGallery: {
//     display: "flex",
//     flexFlow: "wrap",
//     justifyContent: "center"
// }
// }

function ProjectGallery() {
  return (
    <section className="container port-project">
			<div className="row row-cols-1 row-cols-md-2 g-4">
      <Project name={projects[0].name} id={projects[0].id} image={projects[0].image} cardTitle={projects[0].cardTitle} cardText={projects[0].cardText} buttonText={projects[0].buttonText} link={projects[0].link} repo={projects[0].repo} />
      <Project name={projects[1].name} id={projects[1].id} image={projects[1].image} cardTitle={projects[1].cardTitle} cardText={projects[1].cardText} buttonText={projects[1].buttonText} link={projects[1].link} repo={projects[1].repo} />
      <Project name={projects[2].name} id={projects[2].id} image={projects[2].image} cardTitle={projects[2].cardTitle} cardText={projects[2].cardText} buttonText={projects[2].buttonText} link={projects[2].link} repo={projects[2].repo} />
      <Project name={projects[3].name} id={projects[3].id} image={projects[3].image} cardTitle={projects[3].cardTitle} cardText={projects[3].cardText} buttonText={projects[3].buttonText} link={projects[3].link} repo={projects[3].repo} />
      <Project name={projects[4].name} id={projects[4].id} image={projects[4].image} cardTitle={projects[4].cardTitle} cardText={projects[4].cardText} buttonText={projects[4].buttonText} link={projects[4].link} repo={projects[4].repo} />
      <Project name={projects[5].name} id={projects[5].id} image={projects[5].image} cardTitle={projects[5].cardTitle} cardText={projects[5].cardText} buttonText={projects[5].buttonText} link={projects[5].link} repo={projects[5].repo} />
			</div>
		</section>
  );
}

export default ProjectGallery;