import { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EditTicket from "./EditTicket";

function SingleProject({ tickets, handleUpdateTicket, ondelete }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleDeleteClick(id) {
    fetch(`/tickets/${id}`, {
      method: "DELETE",
    });
    ondelete(id);
  }

  return (
    <Fragment>
      {isEditing ? (
        <EditTicket handleUpdateTicket={handleUpdateTicket} tickets={tickets} />
      ) : null}
      <div className="container pt-4">
        <table className="table align-middle mb-0 bg-white table-bordered">
          <thead className="bg-primary text-white">
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
                      onClick={() => setIsEditing((isEditing) => !isEditing)}>
                      <button type="button" className="btn btn-primary px-4 ">
                        Edit
                      </button>
                    </Link>

                    <button
                      type="button"
                      onClick={() => handleDeleteClick(ticket.id)}
                      className="btn btn-danger px-2 ms-3 ">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}
export default SingleProject;
