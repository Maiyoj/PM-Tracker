import { Fragment, useState } from "react";
function CreateForm({onSignIn}) {
    const [signInData, setSignInData] = useState({
        name: "",
        email: "",
        password: "",
      });
      const [errors, setErrors] = useState([]);
    
      // handleonchangedata
      function onChangeValue(e) {
        setSignInData({
          ...signInData,
          [e.target.name]: e.target.value,
        });
      }
    
      //   handle submitted data
      function handleSubmit(e) {
        e.preventDefault();
        const signInUser = {
          name: signInData.name,
          email: signInData.email,
          password: signInData.password,
        };
    
        fetch("/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signInUser),
        }).then((r) => {
          if (r.ok) {
            r.json().then((user) => {
              onSignIn(user);
              setSignInData({
                ...signInData,
                name: "",
                email: "",
                password: "",
              });
            });
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
      }
  return (
    <Fragment>
      <div className="container w-50 mt-4 card card-body py-5 px-md-5">
        <div className="row">
          <h1>Create User</h1>
          <form className="w-60">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                className="form-control"
                aria-describedby="emailHelp"
                name="name"
                value={signInData.name}
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
                aria-describedby="emailHelp"
                name="email"
                value={signInData.email}
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
                name="password"
                value={signInData.password}
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
export default CreateForm;
