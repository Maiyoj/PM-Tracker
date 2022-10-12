import { Fragment, useEffect, useState } from "react";
function Client() {
  const [clients, setClient] = useState([]);
  useEffect(() => {
    fetch("/clients")
      .then((r) => r.json())
      .then((clients) => {
        setClient(clients);
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
                {clients.map((client) => {
                  return (
                    <tr key={client.id}>
                      <td>
                        <p className="fw-normal mb-1">{client.name}</p>
                      </td>
                      <td>
                        <p className="fw-normal mb-1">{client.email}</p>
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
export default Client;
