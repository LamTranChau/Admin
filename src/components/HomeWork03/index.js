// nhập dữ diệu từ input
//sai khi click add thì lấy gía trị bảo vào mang
// đồng thời xóa đi giá trị cũ trên màn hình mà
// hiện trị nội dung vừa nhập ra màn Hình
// nếu nội dung rỗng hoặc đã từng xuất hiện thì không thêm vào list nữa

import { useState } from "react";

const HomeWork03 = () => {
  const [list, setList] = useState([]); // tạo mảng chứa các giá trị lấy từ input
  const [value, setValue] = useState(""); // tạo biến tạm giữ giá trị của input trước khi thêm vào mảng

  const onChange = (e) => {
    const newValue = e.target.value; // Lấy giá trị value từ input
    setValue(newValue); // thêm giá trị vừa lấy vào
  };

  const onCreate = () => {
    // cách 1 : trả về mảng để kiểm tra
    // if (value !== "") {
    //   const newArray = list.filter((a) => {
    //     return a === value; // nếu trùng nhau thì sẽ ép về mảng
    //   }); // trả về 1 mảng
    //   if (newArray.length === 0) {
    //     setList([...list, value]);
    //     // thêm giá trị của biến tạm vào mảng để lưu giá trị
    //     setValue(""); // xóa giá trị cũ của biến tạm đi để chuẩn bị nhận giá trị mới từ input nếu người dùng nhân thêm
    //   }
    // }
    // cách 2: trả về object để kiểm tra
    if (value !== "") {
      const unique = list.find((a) => {
        return a === value;
      });
      console.log(unique);
      if (!unique) {
        setList([...list, value]);
        // thêm giá trị của biến tạm vào mảng để lưu giá trị
        setValue(""); // xóa giá trị cũ của biến tạm đi để chuẩn bị nhận giá trị mới từ input nếu người dùng nhân thêm
      }
    }
  };
  const onDelete = (str) => {
    const newList = list.filter((item) => {
      return item !== str;
    });
    setList(newList);
  };
  return (
    <div>
      <input value={value} type="text" onChange={onChange} />
      <button onClick={onCreate}>Add</button>

      {list.map((name, index) => {
        return (
          <div key={index}>
            <div>{name}</div>
            <button
              onClick={() => {
                onDelete(name);
              }}
            >
              Delete
            </button>
          </div>
        ); // reden ra giao diện, index để lưu thứ tự của div đc khởi tạo ra. name là mỗi giá trị của mảng
      })}
    </div>
  );
};

export default HomeWork03;
