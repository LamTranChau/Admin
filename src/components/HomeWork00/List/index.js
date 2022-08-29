const List = ({ list, onDelete, onEdit,onView }) => {
  return (
    <div className='row'>
      {list.map((item) => {
        return (
          <div className="col-3">
            <div key={item.id} className="my-3">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Thông tin organization</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Name: {item.organization}
                  </h6>
                  <button
                    className="btn btn-secondary m-2"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-view-organ"
                    onClick={() => {
                      onView(item.id);
                    }}
                  >
                    View
                  </button>
                  <button
                    className="btn btn-danger m-2"
                    onClick={() => {
                      onDelete(item.id);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-success m-2"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-Organ-user"
                    onClick={() => {
                      onEdit(item);
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
