import { Fragment, useEffect, useState } from "react";
function CreateProject({ getProjects }) {
  // get clients
  const [clients, setClients] = useState([]);
  const [clientProjects, setProjects] = useState({
    projectname: "",
    description: "",
    client_id: "",
  });
  //  handlechanged data
  function onDataChange(e) {
    setProjects({
      ...clientProjects,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const createdProjects = {
      projectname: clientProjects.projectname,
      description: clientProjects.description,
      client_id: clientProjects.client_id,
    };

    fetch("/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createdProjects),
    })
      .then((res) => res.json())
      .then((newProject) => {
        getProjects(newProject);
        setProjects({
          ...clientProjects,
          projectname: "",
          description: "",
          client_id: "",
        });
      });
  }

  useEffect(() => {
    fetch("/clients")
      .then((res) => res.json())
      .then((client) => {
        setClients(client);
      });
  }, []);

  return (
    <Fragment>
      <div className="container">
        <div className="row g-3">
          <h1>Create Project</h1>
          <form className="border rounded-top p-3">
            <div className="">
              <label className="form-label">Name</label>
              <textarea
                className="form-control"
                id="textAreaExample"
                rows="1"
                name="projectname"
                value={clientProjects.projectname}
                onChange={onDataChange}></textarea>
            </div>

            <div className="">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                id="textAreaExample"
                rows="4"
                name="description"
                value={clientProjects.description}
                onChange={onDataChange}></textarea>
            </div>
            <label className="form-label">Client</label>
            <select
              className="form-select"
              aria-label="Default select example"
              name="client_id"
              onChange={onDataChange}>
              {clients.map((client) => (
                <option value={client.id}>{client.name}</option>
              ))}
            </select>
            <button
              type="submit"
              className="btn btn-primary mt-2"
              onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
export default CreateProject;
