import { useState } from "react";
import FromUser from "../../components/FormUser";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../components/apis/users";

const DATA_USER = { name: "", phone: "" };
const UserCreate = () => {
  const [user, setUser] = useState(DATA_USER);
  const navigate = useNavigate()
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const onSubmit = () => {
    createUser(user)
      .then((response) => {
        setUser(DATA_USER);
        navigate('/user')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row">
        UserCreate
        <FromUser user={user} onChange={onChange} onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default UserCreate;
