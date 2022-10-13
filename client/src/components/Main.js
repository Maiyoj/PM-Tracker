import { Fragment } from "react";

function Main({ user, tickets }) {
  return (
    <Fragment>
      <main style={{ marginTop: "58px" }}>
        <div className="container pt-4">
          <p className=" h-25 fs-1 text-dark fw-bold w-25">
            Welcome {user.name}
          </p>
          <section className="mb-4">
            <div className="card">
              <div className="card-header text-center py-3">
                <h5 className="mb-0 text-center">
                  <strong>Ongoing Projects</strong>
                </h5>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover text-nowrap">
                    <thead>
                      <tr>
                        <th scope="col">Product Detail Views</th>
                        <th scope="col">Unique Purchases</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Product Revenue</th>
                        <th scope="col">Avg. Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>18,492</td>
                        <td>228</td>
                        <td>350</td>
                        <td>$4,787.64</td>
                        <td>$13.68</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="row">
              <div className="col-xl-3 col-sm-6 col-12 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between px-md-1">
                      <div className="align-self-center">
                        <i className="fas fa-pencil-alt text-info fa-3x"></i>
                      </div>
                      <div className="text-end">
                        <h3>278</h3>
                        <p className="mb-0">New Tickets</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between px-md-1">
                      <div className="align-self-center">
                        <i className="far fa-comment-alt text-warning fa-3x"></i>
                      </div>
                      <div className="text-end">
                        <h3>156</h3>
                        <p className="mb-0">New Comments</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between px-md-1">
                      <div className="align-self-center">
                        <i className="fas fa-chart-line text-success fa-3x"></i>
                      </div>
                      <div className="text-end">
                        <h3>64.89 %</h3>
                        <p className="mb-0">Bounce Rate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between px-md-1">
                      <div className="align-self-center">
                        <i className="fas fa-map-marker-alt text-danger fa-3x"></i>
                      </div>
                      <div className="text-end">
                        <h3>423</h3>
                        <p className="mb-0">Total Visits</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-sm-6 col-12 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between px-md-1">
                      <div>
                        <h3 className="text-danger">278</h3>
                        <p className="mb-0">New Projects</p>
                      </div>
                      <div className="align-self-center">
                        <i className="fas fa-rocket text-danger fa-3x"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between px-md-1">
                      <div>
                        <h3 className="text-success">156</h3>
                        <p className="mb-0">New Clients</p>
                      </div>
                      <div className="align-self-center">
                        <i className="far fa-user text-success fa-3x"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between px-md-1">
                      <div>
                        <h3 className="text-warning">64.89 %</h3>
                        <p className="mb-0">Conversion Rate</p>
                      </div>
                      <div className="align-self-center">
                        <i className="fas fa-chart-pie text-warning fa-3x"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between px-md-1">
                      <div>
                        <h3 className="text-info">423</h3>
                        <p className="mb-0">Support Tickets</p>
                      </div>
                      <div className="align-self-center">
                        <i className="far fa-life-ring text-info fa-3x"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-sm-6 col-12 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between px-md-1">
                      <div>
                        <h3 className="text-info">278</h3>
                        <p className="mb-0">New Posts</p>
                      </div>
                      <div className="align-self-center">
                        <i className="fas fa-book-open text-info fa-3x"></i>
                      </div>
                    </div>
                    <div className="px-md-1">
                      <div
                        className="progress mt-3 mb-1 rounded"
                        style={{ height: "7px" }}>
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between px-md-1">
                      <div>
                        <h3 className="text-warning">156</h3>
                        <p className="mb-0">New Comments</p>
                      </div>
                      <div className="align-self-center">
                        <i className="far fa-comments text-warning fa-3x"></i>
                      </div>
                    </div>
                    <div className="px-md-1">
                      <div
                        className="progress mt-3 mb-1 rounded"
                        style={{ height: "7px" }}>
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "35%" }}
                          aria-valuenow="35"
                          aria-valuemin="0"
                          aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between px-md-1">
                      <div>
                        <h3 className="text-success">64.89 %</h3>
                        <p className="mb-0">Bounce Rate</p>
                      </div>
                      <div className="align-self-center">
                        <i className="fas fa-mug-hot text-success fa-3x"></i>
                      </div>
                    </div>
                    <div className="px-md-1">
                      <div
                        className="progress mt-3 mb-1 rounded"
                        style={{ height: "7px" }}>
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: "60%" }}
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between px-md-1">
                      <div>
                        <h3 className="text-danger">423</h3>
                        <p className="mb-0">Total Visits</p>
                      </div>
                      <div className="align-self-center">
                        <i className="fas fa-map-signs text-danger fa-3x"></i>
                      </div>
                    </div>
                    <div className="px-md-1">
                      <div
                        className="progress mt-3 mb-1 rounded"
                        style={{ height: "7px" }}>
                        <div
                          className="progress-bar bg-danger"
                          role="progressbar"
                          style={{ width: "40%" }}
                          aria-valuenow="40"
                          aria-valuemin="0"
                          aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

         
        </div>
      </main>
    </Fragment>
  );
}

export default Main;
