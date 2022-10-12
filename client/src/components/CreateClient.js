import { Fragment, useEffect, useState } from "react";
function CreateClient({ getClients }) {
  // get clients
  const [clientData, setClients] = useState({
    name: "",
    email: ""
  });
  //  handlechanged data
  function onDataChange(e) {
    setClients({
      ...clientData,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const createdClient = {
      name: clientData.name,
      email: clientData.email,
      
    };

    fetch("/clients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createdClient),
    })
      .then((res) => res.json())
      .then((newClient) => {
        getClients(newClient);
        setClients({
          ...clientData,
          name: "",
          email: "",
        });
      });
  }

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
                name="name"
                value={clientData.name}
                onChange={onDataChange}></textarea>
            </div>

            <div className="">
              <label className="form-label">Email</label>
              <textarea
                className="form-control"
                id="textAreaExample"
                rows="4"
                name="email"
                value={clientData.email}
                onChange={onDataChange}></textarea>
            </div>

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
export default CreateClient;
