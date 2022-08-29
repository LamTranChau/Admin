import { useState } from "react";


const HomeWork01 = () => {
  // const [count, setCount] = useState(10);
  // const handClick = () => {if(count>0){setCount(count - 1)}}
  const handClick = () => {
    {
      // setCount((name = "loi"));
      // setName("Hung");
      setUser({
        ...user, // reden lại giá trị cũ nếu không khi ta set lại sẽ bị mất hết giá trị cũ, chỉ còn giá trị mới mà ta vừa thêm vào. 
        name: 'Lam',
        // phone: '00000'
      })
    }
  };
  const ss = () => {} // đặt tên để tái sử dụng arrow funtion
  const [user, setUser] = useState({
    name: 'Chau',
    phone: '0762555608'
  });
  
  // Bài tập: nhập mảng tên name,phone. xuat ra, click btn thay doi name,phone
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.phone}</p>
      <button onClick={handClick}>Click me</button>
    </div>
  );
}

export default HomeWork01;
