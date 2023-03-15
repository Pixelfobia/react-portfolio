import React from "react";

function Project(props) {
  return (<>
    
      
        <a className="port-project--link" href={props.link} >
        <div className="col">
          <div className="card">
            <img src={props.image} className="card-img-top" alt={props.name} />
            <div className="card-body">
              <h5 className="card-title">{props.cardTitle}</h5>
              <p className="card-text">{props.cardText}
              </p>
              <a href={props.repo}
                className="btn btn-warning text-danger" target="_blank" rel="noreferrer">GitHub Repo</a>
            </div>
          </div>
        </div>
        </a>
  
 
    </>
  );
}

export default Project;
