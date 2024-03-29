import { Fragment, useEffect, useState } from "react";
import CreateProject from "./CreateProject";
function ClientsProjects() {
  const [projects, setProject] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  useEffect(() => {
    fetch("/projects")
      .then((r) => r.json())
      .then((project) => {
        setProject(project);
      });
  }, []);

  function getProjects(newProjectRecived) {
    const updateProject = [...projects, newProjectRecived];
    setProject(updateProject);
  }

  return (
    <Fragment>
      <main style={{ marginTop: "58px" }}>
        <div className="container pt-4">
          <div className="container pt-4">
            <button
              type="button"
              onClick={() => setIsAdding((isAdding) => !isAdding)}
              className="btn btn-primary ms-8 my-2">
              Create Projects
            </button>
            {isAdding ? <CreateProject getProjects={getProjects} /> : null}
            <table className="table align-middle mb-0 bg-white table-bordered">
              <thead className="bg-primary text-white">
                <tr>
                  <th>Project Name</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => {
                  return (
                    <tr key={project.id}>
                      <td>
                        <p className="fw-normal mb-1">{project.projectname}</p>
                      </td>
                      <td>
                        <p className="fw-normal mb-1">{project.description}</p>
                      </td>

                      <td>
                        <button type="button" className="btn btn-primary px-4 ">
                          Edit
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger px-2 ms-3">
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </Fragment>
  );
}
export default ClientsProjects;
