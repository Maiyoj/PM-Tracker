import { Fragment, useEffect, useState } from "react";
function ProjectForm({getTickets}) {
  // get projects
  const [projects, setProject] = useState([]);
  const [users, setUsers] = useState([]);
  const [ticketData, setTickets] = useState({
    project: "",
    description: "",
    priority: "",
    enviroment: "",
    category: "",
    status: "",
    comment: "",
    user: "",
  });
  //  handlechanged data
  function onDataChange(e) {
    setTickets({
      ...ticketData,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const createdTickets = {
      project: ticketData.projectname,
      description: ticketData.description,
      priority: ticketData.priority,
      enviroment: ticketData.enviroment,
      category: ticketData.category,
      status: ticketData.status,
      comment: ticketData.comment,
      user: ticketData.name,
    };

    fetch("/tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createdTickets),
    })
      .then((res) => res.json())
      .then((newTicket) => {
        getTickets(newTicket)
        setTickets({
          ...ticketData,
          project: "",
          description: "",
          priority: "",
          enviroment: "",
          category: "",
          status: "",
          comment: "",
          user: "",
        });
      });
  }

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
            <select
              className="form-select"
              aria-label="Default select example"
              name="projectname"
              value={ticketData.project}
              onChange={onDataChange}>
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
                rows="4"
                name="description"
                value={ticketData.description}
                onChange={onDataChange}></textarea>
            </div>
            <div className="">
              <label className="form-label">Priority</label>
              <textarea
                className="form-control"
                id="textAreaExample"
                rows="4"
                name="priority"
                value={ticketData.priority}
                onChange={onDataChange}></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Enviroment</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="enviroment"
                value={ticketData.enviroment}
                onChange={onDataChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Category</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="category"
                value={ticketData.category}
                onChange={onDataChange}
              />
            </div>
            <select
              className="form-select"
              aria-label="Default select example"
              name="status"
              value={ticketData.status}
              onChange={onDataChange}>
              <option>Status</option>
              <option>Open</option>
              <option>Done</option>
            </select>
            <div className="mb-3">
              <label className="form-label">Comment</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="comment"
                value={ticketData.comment}
                onChange={onDataChange}
              />
            </div>

            <select
              className="form-select"
              aria-label="Default select example"
              name="name"
              value={ticketData.user}
              onChange={onDataChange}>
              {users.map((user) => (
                <option key={user.id} value={user.name} name="name">
                  {user.name}
                </option>
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
export default ProjectForm;
