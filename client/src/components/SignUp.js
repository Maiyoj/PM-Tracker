import { Fragments, useEffect } from "react";
import { useEffec, useState } from "react";
function SignUp() {
  const [user, setUser] = useState([]);
  // useEffect(() => {
  //   fetch("/users")
  //   .then(r => r.json())
  //   .then((user)=>{
  //     setUser(user)
  //   })
  // });

  
  
  return (
    <Fragment>
      <div className="container">
        <div className="row g-3">
          <h1>LoginForm</h1>
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                className="form-control"
                id="exampleInputName"
                aria-describedby="emailHelp"
                name="name"
                value={formData.name}
                onChange={onChangeValue}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                value={formData.email}
                onChange={onChangeValue}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                value={formData.password}
                onChange={onChangeValue}
              />
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
export default SignUp;
