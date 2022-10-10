import { Fragment, useEffect, useState } from "react";
function ProjectForm() {
  // get projects
  const [projects, setProject] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("/projects")
      .then((res) => res.json())
      .then((project) => {
        setProject(project);
      });
  }, []);

  // get users
  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((user) => {
        setUsers(user);
      });
  }, []);

  return (
    <Fragment>
      <div className="container">
        <div className="row g-3">
          <h1>Create Ticket</h1>
          <form className="border rounded-top p-3">
            <select className="form-select" aria-label="Default select example">
              {projects.map((project) => (
                <option key={project.id} value={project.projectname}>
                  {project.projectname}
                </option>
              ))}
            </select>
            <div className="">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                id="textAreaExample"
                rows="4"></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Enviroment</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="enviroment"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Category</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="enviroment"
              />
            </div>
            <select
              className="form-select"
              aria-label="Default select example"></select>
            <div className="mb-3">
              <label className="form-label">Comment</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="enviroment"
              />
            </div>
            <select className="form-select" aria-label="Default select example">
              {users.map((user) => (
                <option key={user.id} value={user.name}>
                  {user.name}
                </option>
              ))}
            </select>
            <button type="submit" className="btn btn-primary mt-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
export default ProjectForm;
