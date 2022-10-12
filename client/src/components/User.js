import { Fragment } from "react";
import { useEffect, useState } from "react";
import CreateForm from "./CreateForm";

function User() {
  const [users, setUsers] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  useEffect(() => {
    fetch("/users")
      .then((r) => r.json())
      .then((user) => {
        setUsers(user);
      });
  },[]);

  function getUsers(newUsersCreated) {
    const updateUser = [...users, newUsersCreated];
    setUsers(updateUser);
  }

  return (
    <Fragment>
      <main style={{ marginTop: "58px" }}>
        <div className="container pt-4">
          <button
            type="button"
            onClick={() => setIsAdding((isAdding) => !isAdding)}
            className="btn btn-primary ms-8 my-2">
            Create User
          </button>
          {isAdding ? <CreateForm onSignIn={getUsers} /> : null}
          <table className="table align-middle mb-0 bg-white">
            <thead className="bg-light">
              <tr>
                <th>Name</th>
                <th>Title</th>
                <th>Status</th>
                <th>Position</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                          alt=""
                          style={{ width: "45px", height: "45px" }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p className="fw-bold mb-1">{user.name}</p>
                          <p className="text-muted mb-0">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="fw-normal mb-1">Software engineer</p>
                      <p className="text-muted mb-0">IT department</p>
                    </td>
                    <td>
                      <span className="badge badge-success rounded-pill d-inline">
                        Active
                      </span>
                    </td>
                    <td>Senior</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-link btn-sm btn-rounded">
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </Fragment>
  );
}

export default User;
