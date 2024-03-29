import { Fragment, useEffect, useState } from "react";
import ProjectForm from "./ProjectForm";
import SingleProject from "./SingleProject";
function Project() {
  const [tickets, setTickets] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

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

  function handleDelete(id) {
    const deleteUpdate = tickets.filter((ticket) => ticket.id !== id);
    setTickets(deleteUpdate);
  }

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

          <SingleProject
            tickets={tickets}
            handleUpdateTicket={handleUpdateTicket}
            ondelete={handleDelete}
          />
        </div>
      </main>
    </Fragment>
  );
}
export default Project;
