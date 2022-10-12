import { Fragment, useEffect, useState } from "react";
function ClientsProjects() {
  const [projects, setProject] = useState([]);
  useEffect(() => {
    fetch("/projects")
      .then((r) => r.json())
      .then((project) => {
        setProject(project);
      });
  });
  return (
    <Fragment>
      <main style={{ marginTop: "58px" }}>
        <div className="container pt-4">
          <div className="container pt-4">
            <table className="table align-middle mb-0 bg-white table-bordered">
              <thead className="bg-primary text-white">
                <tr>
                  <th>Project Name</th>
                  <th>Description</th>
                  <th>Client</th>
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
                          // onClick={handleDeleteClick(ticket.id)}
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