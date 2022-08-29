import {useNavigate} from "react-router-dom";
import "./style.css";

const Form = ({ user, onChange, onSubmit, validate, list }) => {
  // const e = validate(user,list);
  const navigate = useNavigate();
  const backto = () => {
    navigate('/user')
  }
  return (
    <div>
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
        <div>
          <button type="button" class="btn btn-secondary me-2" onClick={backto}>
            Back
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={onSubmit}
            // disabled={!e}
          >
            {user.id ? "Edit" : "Create"}
          </button>
        </div>
      </div>
     
    </div>
  );
};

export default Form;
