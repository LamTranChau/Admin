import { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { editUser, getUser } from "../../components/apis/users";
import FromUser from "../../components/FormUser";

const DATA_USER = { name: "", phone: "" };
const UserEdit = () => {
  const [user, setUser] = useState(DATA_USER);
  const navigate = useNavigate();
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  let { id } = useParams();

  useEffect(() => {
    getUser(id)
      .then((res) => {
       
        setUser(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  },[id]);

  const onSubmit = () => {
    editUser(user.id, user)
      .then((response) => {
        setUser(DATA_USER);
        navigate("/user");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row">
        UserEdit {id}
        <FromUser user={user} onChange={onChange} onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default UserEdit;