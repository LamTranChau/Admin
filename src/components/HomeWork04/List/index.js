import { Link } from "react-router-dom";
const List = ({ list, onDelete, onView, setIsLoading }) => {
  return (
    <div className="row">
      {list.map((item) => {
        return (
          <div className="col-3">
            <div key={item.id} className="my-3">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Thông tin User</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Name: {item.name}
                  </h6>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Phone: {item.phone}
                  </h6>
                  <Link to={`/user/${item.id}`}>
                    <button
                      className="btn btn-secondary m-2"
                    >
                      View
                    </button>
                  </Link>
                  <button
                    className="btn btn-danger m-2"
                    onClick={() => {
                      onDelete(item.id);
                    }}
                  >
                    Delete
                  </button>
                  <Link to={`/user/${item.id}/edit`}>
                    <button className="btn btn-success m-2">Edit</button>
                  </Link>
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
