import "./style.css";

const Form = ({ user, onChange, onSubmit,validate, list }) => {
  // const e = validate(user,list);
  return (
    <div>
      <div id="modal-form-user" className="modal" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Form user</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div>
                <label className="me-2">Name:</label>
                <input
                  className="myForm"
                  name="name"
                  value={user.name}
                  onChange={onChange}
                  type="text"
                />
              </div>
              <div>
                <label className="me-2">Phone:</label>
                <input
                  className="myForm"
                  name="phone"
                  value={user.phone}
                  onChange={onChange}
                  type="text"
                />
              </div>              
            </div>
            <div className="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"                
              >
                Close
              </button>
              <button
                className="btn btn-primary"
                data-bs-dismiss="modal"
                // disabled={!e}
              >
                {user.id ? "Edit" : "Create"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
