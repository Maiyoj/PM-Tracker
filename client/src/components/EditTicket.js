import { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function EditTicket({ handleUpdateTicket, tickets }) {
  let params = useParams();
  // get projects
  const [projects, setProject] = useState([]);
  const [users, setUsers] = useState([]);
  const [ticketData, setTickets] = useState({
    project_id: "",
    description: "",
    priority: "",
    enviroment: "",
    category: "",
    status: "",
    comment: "",
    user_id: "",
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
      project_id: ticketData.project_id,
      description: ticketData.description,
      priority: ticketData.priority,
      enviroment: ticketData.enviroment,
      category: ticketData.category,
      status: ticketData.status,
      comment: ticketData.comment,
      user_id: ticketData.user_id,
    };

    fetch(`/tickets/${params.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createdTickets),
    })
      .then((res) => res.json())
      .then((newTicket) => {
        handleUpdateTicket(newTicket);
        setTickets({
          ...ticketData,
          project_id: "",
          description: "",
          priority: "",
          enviroment: "",
          category: "",
          status: "",
          comment: "",
          user_id: "",
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
          <h1>Update Ticket</h1>
          <form className="border rounded-top p-3">
            <select
              className="form-select"
              aria-label="Default select example"
              name="project_id"
              onChange={onDataChange}>
              {projects.map((project) => (
                <option key={project.id} value={project.id}>
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
              name="user_id"
              value={ticketData.user_id}
              onChange={onDataChange}>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="btn btn-primary mt-2"
              onClick={handleSubmit}>
              Update
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
export default EditTicket;
