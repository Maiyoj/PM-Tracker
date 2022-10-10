import { Fragment } from "react";
function ProjectForm() {
  return (
    <Fragment>
      <div className="container">
        <div className="row g-3">
          <h1>Create Ticket</h1>
          <form className="border rounded-top p-3">
            <select className="form-select" aria-label="Default select example">
              <option selected>Prject Name</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <div className="">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                id="textAreaExample"
                rows="4"></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Enviroment</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="enviroment"
              />
            </div>{" "}
            <div className="mb-3">
              <label className="form-label">Category</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="enviroment"
              />
            </div>
            <select className="form-select" aria-label="Default select example">
              <option selected>Status</option>
              <option value="1">Open</option>
              <option value="2">Inprogress</option>
              <option value="3">Done</option>
            </select>
            <div className="mb-3">
              <label className="form-label">Comment</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="enviroment"
              />
            </div>
            <select className="form-select" aria-label="Default select example">
              <option selected>Assigned To</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <button type="submit" className="btn btn-primary mt-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
export default ProjectForm;
