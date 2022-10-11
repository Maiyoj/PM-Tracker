import { Fragment, useEffect, useState } from "react";
import ProjectForm from "./ProjectForm";
import EditTicket from "./EditTicket";
import { Link } from "react-router-dom";
function Project() {
  const [tickets, setTickets] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    fetch("/tickets")
      .then((res) => res.json())
      .then((ticks) => {
        setTickets(ticks);
      });
  }, []);
  function getTickets(newTicketsRecived) {
    const updateTickets = [...tickets, newTicketsRecived];
    setTickets(updateTickets);
  }

  function handleUpdateTicket(updatedTickets) {
    const updatedTicks = tickets.map((ticket) => {
      if (ticket.id === updatedTickets.id) {
        return updatedTicks;
      } else {
        return ticket;
      }
    });
    setTickets(updatedTicks);
  }

  // // Delete Function
  // function handleDeleteClick(id) {
  //   fetch(`/tickets/${id}`, {
  //     method: "DELETE",
  //   })
  //  const updatedTickets = tickets.filter(
  //   (ticket) => ticket.id !== id
  // );
  // setTickets(updatedTickets);

  // }

  return (
    <Fragment>
      <main style={{ marginTop: "58px" }}>
        <div className="container pt-4">
          <button
            type="button"
            onClick={() => setIsAdding((isAdding) => !isAdding)}
            className="btn btn-primary ms-8 my-2">
            Create Ticket
          </button>
          {isAdding ? <ProjectForm getTickets={getTickets} /> : null}
          {isEditing ? (
            <EditTicket handleUpdateTicket={handleUpdateTicket} />
          ) : null}

          <div className="container pt-4">
            <table className="table align-middle mb-0 bg-white table-bordered">
              <thead className="bg-secondary text-white">
                <tr>
                  <th>Description</th>
                  <th>Project Name</th>
                  <th>Priority</th>
                  <th>Enviroment</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Comment</th>
                  <th>Assigned To</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket) => {
                  return (
                    <tr key={ticket.id}>
                      <td>
                        <p className="fw-normal mb-1">{ticket.description}</p>
                      </td>
                      <td>
                        <p className="fw-normal mb-1">
                          {ticket.project.projectname}
                        </p>
                      </td>
                      <td>
                        <p className="fw-normal mb-1">{ticket.priority}</p>
                      </td>
                      <td>
                        <p className="fw-normal mb-1">{ticket.enviroment}</p>
                      </td>
                      <td>
                        <p className="fw-normal mb-1">{ticket.category}</p>
                      </td>

                      <td>
                        <p className="fw-normal mb-1">{ticket.status}</p>
                      </td>
                      <td>
                        <p className="fw-normal mb-1">{ticket.comment}</p>
                      </td>
                      <td>
                        <p className="fw-normal mb-1">{ticket.user.name}</p>
                      </td>

                      <td>
                        <Link
                          to={`/projects/${ticket.id}`}
                          onClick={() =>
                            setIsEditing((isEditing) => !isEditing)
                          }>
                          Edit
                        </Link>

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
export default Project;
