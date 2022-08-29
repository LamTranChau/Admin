import { useEffect, useState } from "react";
import Form from "./Form";
import List from "./List";
import ModalView from "./ModalView";
import {
  getUsers,
  createUser,
  editUser,
  deleteUser,
} from "../../components/apis/users";
import {Link} from 'react-router-dom';
// import Login from "./Login";

// Kiểm tra nhập vào của input
const validate = (user, list) => {
  // Kiểm tra nếu input rỗng => return false
  if (user.name === "" || user.phone === "") {
    console.log(1);
    return false; // rỗng trả về sai
  }
  const unique = list.find((a) => {
    console.log(2);
    return a.name === user.name || a.phone === user.phone; // trả về giá trị
  });
  console.log(3);
  return unique ? false : true;
};

// phân quyền vd

// khi nguoi dung dang edit du lieu, neu oj thi hien submit

// xử lý bất đồng bộ
// AJAX
// .then()
// .catch()
// .finally()
// promise.all :
// async / await

//  HOOK: useRef()
const HomeWork04 = () => {
  const [selectID, setSelectID] = useState();
  const DATA_USER = { name: "", phone: "" };
  const [list, setList] = useState([]);
  const [user, setUser] = useState(DATA_USER);
  const [search, setSearch] = useState("");
  const [listUseffected, setListUseffected] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [Organization, setOrganization] = useState([]);

  // useEffect(()=>{
  //   console.log('Linh');
  // }) // Quan sát tát cả biến, chạy logic bên trong khi renger.
  // useEffect(()=>{
  //   console.log("chau");
  // },[]) // chạy logic bên trong khi renger.
  // useEffect(()=>{
  //   console.log('Duy');
  //   // Array: duyệt mảng.
  //   // array.forEach(element => {
  //     // array ([{name: 1},{'w'},true}])
  //   // array.map((item)=>{}) arr[]
  //   // array.filter((item)=>{return item.name === 1}) arr []
  //   // array.find((item)=>{return item.name}) // obj {}
  //   });
  // },[user]) // Quan sát biến bên trong, mỗi khi biến có sửj thay đổi là nó thực hiện logic

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    setIsLoading(true);
    // nếu có bất kỳ đầu hàm nào có ásync thì có thể thêm await vao` để đợi thực hiện xong mới chạy tiếp
    const response = await getUsers();
    setList(response.data);
    setIsLoading(false);
    // getUsers()
    //   .then((response) => {
    //     setList(response.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
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
    if (!user.id) {
      const validated = validate(user, list);
      // if (validated) {
      // setList([
      // ...list,
      // {
      //   ...user,
      //   id: Math.random(),
      // },
      if (validated) {
        createUser(user)
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

      // ]);
    }
    if (user.id) {
      editUser(user.id, user)
        .then((response) => {
          fetchData();
          setUser(DATA_USER);
        })
        .catch((err) => {
          console.log(err);
        });
      // const newList = list.map((item) => {
      //   return item.id === user.id ? user : item;
      // });
      // setList(newList);
      // setUser(DATA_USER);
    }
  };

  const onEdit = (data) => {
    setUser(data);
  };
  const onView = (id) => {
    setSelectID(id);
  };

  // hướng dẫn useEffect
  useEffect(() => {
    const NewList = list.filter((item) => {
      return item.name.includes(search) || item.phone.includes(search);
    });
    setListUseffected(NewList);
  }, [list, search]); // kiểm tra, chỉ chạy 1 lần duy nhất nếu [] để trống. nếu [] có giá trị, thì sẽ quan sát giá trị đó liên tục, thực hiện logic bên trong arrow function.
  // Nếu không truyền biến (useEffect (() => {})), nó sẽ chạy lại mỗi khi có reden lại.

  const onDelete = (id) => {
    // const newList = list.filter((item) => {
    //   return item.id !== e.id;
    // });
    // setList(newList);
    deleteUser(id)
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
      {/* <Login></Login> */}
      <Link to='/user/create'>
        <button
          class="btn btn-primary me-3"
        >
          Create User
        </button>
      </Link>
      <input
        className="myForm"
        value={search}
        onChange={onSearch}
        type="text"
        placeholder="Find user"
      />

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
          setIsLoading={setIsLoading}
        />
      )}
      <Form user={user} onChange={onChange} list={list} onSubmit={onSubmit} />
      <ModalView id={selectID} />
    </div>
  );
};

export default HomeWork04;
