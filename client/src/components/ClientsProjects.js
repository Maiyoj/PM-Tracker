import { Fragment, useEffect, useState } from "react";
import CreateProject from "./CreateProject";
function ClientsProjects() {
  const [projects, setProject] = useState([]);
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
            <CreateProject getProjects={getProjects} />
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
                        <button
                          type="button"
                          className="btn btn-link btn-sm btn-rounded text-primary">
                          Edit
                        </button>
                        <button
                          type="button"
                          className="btn btn-link btn-sm btn-rounded text-danger">
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
