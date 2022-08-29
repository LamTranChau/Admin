import { useEffect, useState } from "react";
import Button from "./Button";
import Input from "./Input";

const HomeWork05 =   () => {



// Rest api 
// get 

//  API : get lấy dữ
//       post tao, put cap nhat , delete xoa 
      











    
  const arr = [1, 2, 3, 3, 4, 5, 5, 7, 6];

  function unique(arr) {
    var newArr = [];
    newArr = arr.filter((item) => {
      return newArr.includes(item) ? "" : newArr.push(item);
    });
    return newArr;
  }  
  console.log(unique(arr));

  const arra = [{id: '1',name: 'chau'},{id: '2',name: 'chau'},{id: '1',name: 'chau'}]


  const uunique = (arra) => {
    const result = {}
    arra.forEach(item => {
        if(!result[item.id]){
            result[item.id] = item
        }
        console.log(result,'1');
    })
    console.log(result,"123");
    return Object.values(result)
  }
  console.log(uunique(arra));

  const [num,setnum] = useState(0)

  return (
    <div class="calculator">
      <Input />
      <Button set={setnum} num={num}/>
    </div>
  );
};

// setup 1 du an moi
// react + ant design
// sign in page email + password
// Dashboard: sidebar + header + main
// sidebar: /users, /organizations
// Users: Crud (them xoa sua), fullname, email, phone,gender, organizations
// Organization: Crud (them xoa sua), name, uniqueName.
export default HomeWork05;
