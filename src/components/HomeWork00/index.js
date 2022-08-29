import { useEffect, useState } from "react";
import Form from "./Form";
import List from "./List";
import ModalView from "./ModalView";
import {
  getOrgans,
  createOrgan,
  editOrgan,
  deleteOrgan,
} from "../apis/Organization";


// Kiểm tra nhập vào của input
const validate = (user, list) => {
  // Kiểm tra nếu input rỗng => return false
  if (user.organization === "") {
    console.log(1);
    return false; // rỗng trả về sai
  }
  const unique = list.find((a) => {
    console.log(2);
    return a.organization === user.organization // trả về giá trị
  });
  console.log(3);
  return unique ? false : true;
};

const HomeWork00 = () => {
  const [selectID, setSelectID] = useState();
  const DATA_USER = { organization: ""};
  const [list, setList] = useState([]);
  const [user, setUser] = useState(DATA_USER);
  const [search, setSearch] = useState("");
  const [listUseffected, setListUseffected] = useState([]);
  const [isLoading, setIsLoading] = useState();
  
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    const NewList = list.filter((item) => {
      return item.organization.toLowerCase().includes(search);
    });
    setListUseffected(NewList);
  }, [list, search]);
  
  const fetchData = async () => {
    setIsLoading(true)
    // nếu có bất kỳ đầu hàm nào có ásync thì có thể thêm await vao` để đợi thực hiện xong mới chạy tiếp
    const response = await getOrgans();
    setList(response.data);
    setIsLoading(false)
  };

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const onSubmit = () => {
    // Không có id : khởi tạo obj mới.
    if (!user.id) {
      const validated = validate(user, list);
      if (validated) {
        createOrgan(user)
          .then((response) => {
            fetchData();
            setUser(DATA_USER);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        setUser(DATA_USER);
      }
    }
    // Có id: Sửa lại nội dung cũ và khởi tạo lại obj mới, ghi đè lên.
    if (user.id) {
      editOrgan(user.id, user)
        .then((response) => {
          fetchData();
          setUser(DATA_USER);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const onEdit = (data) => {
    setUser(data);
  };
  const onView = (id) => {
    setSelectID(id);
  };


  const onDelete = (id) => { 
    deleteOrgan(id)
      .then((res) => {
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  return (
    <div>
      <div>
      <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#modal-Organ-user"
        class="btn btn-primary me-3"
      >
        Create Organization
      </button>
      <input
        className="myForm"
        value={search}
        onChange={onSearch}
        type="text"
        placeholder="Find organization"
      />
      </div>
      {isLoading && (
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}
      {!isLoading && (
        <List
          list={listUseffected}
          onView={onView}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      )}
      <Form user={user} onChange={onChange} list={list} onSubmit={onSubmit} />
      <ModalView id={selectID} />
    </div>
  );
};

export default HomeWork00;
