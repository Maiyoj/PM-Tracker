import { Fragment, useEffect, useState } from "react";
import CreateClient from "./CreateClient";
function Client() {
  const [isAdding, setIsAdding] = useState(false);
  const [clients, setClient] = useState([]);
  useEffect(() => {
    fetch("/clients")
      .then((r) => r.json())
      .then((clients) => {
        setClient(clients);
      });
  },[]);
  function getClients(newClients) {
    const updateClient = [...clients, newClients];
    setClient(updateClient);
  }
  return (
    <Fragment>
      <main style={{ marginTop: "58px" }}>
        <div className="container pt-4">
          <div className="container pt-4">
          <button
              type="button"
              onClick={() => setIsAdding((isAdding) => !isAdding)}
              className="btn btn-primary ms-8 my-2">
              Create Client
            </button>
            {isAdding ? <CreateClient getClients={getClients} /> : null}
            <table className="table align-middle mb-0 bg-white table-bordered">
              <thead className="bg-primary text-white">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Actions</th>
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
export default Client;
