import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getUser } from "../../components/apis/users";

const DATA_USER = { name: "", phone: "" };

const UserEdit = () => {
  const [user, setUser] = useState(DATA_USER);
  //   const navigate = useNavigate();

  let { id } = useParams();

  useEffect(() => {
    getUser(id)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        UserView {id}
        <div>
          <label className="me-2">Name: {user.name}</label>
        </div>
        <div>
          <label className="me-2">Phone: {user.phone}</label>
        </div>
        <div>
          <label className="me-2">Email: {user.email}</label>
        </div>
        <Link to={"/user"}>
          <button type="button" class="btn btn-secondary">
            Close
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserEdit;
