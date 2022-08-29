// import "./style.css";
import { getUser } from "../../apis/users";
import { useState, useEffect } from "react";
const ModalView = ({ id }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    if (id) {
      getUser(id)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  return (
    <div>
      <div id="modal-view-user" className="modal" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">View user</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div>
                <label className="me-2">Name: {data.name}</label>                 
              </div>
              <div>
                <label className="me-2">Phone: {data.phone}</label>                 
              </div>
              <div>
                <label className="me-2">Email: {data.email}</label>                 
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalView;
