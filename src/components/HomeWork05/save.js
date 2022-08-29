  // RemoveAttr
  const removeAttr = (selector, attr) => {
    const a = document.querySelectorAll(selector);
    a.forEach((item) => {
      item.removeAttribute(attr); // Gỡ bỏ vô hiệu hoá các nút phép toán , nút bằng
    });
  };
  // add attr
  const addAttr = (selector, attr, value) => {
    const a = document.querySelectorAll(selector); // tim` tat cac (array)
    a.forEach((item) => {
      item.setAttribute(attr, value); // Vô hiệu hoá ô phép tính
    });
  };

  // Thực hiện các hành động bên trong khi tài liệu html của trang web được load xong và cây DOM được tạo thành
  window.addEventListener("DOMContentLoaded", (event) => {
    addAttr(".init", "disabled", "true");
  });
  // document.ready(() => {
  //const element = document.querySelector('.box-calculation')// tim` thang dau tien duy nhat (obj)

  // array hay dùng: forEach, filter, find, map
  // user = {name : '1', phone : '2'}
  // const {name, phone} = user === truyen props
  // });

  // Thực hiện các hành động bên trong khi click vào các nút số

  const element1s = document.querySelectorAll(".box-button button.number");
  element1s.forEach((element1) => {
    // element1.addEventListener('hover',()=>{})
    // element1.removeEventListener('hover',()=>{})
    element1.addEventListener("click", () => {
      $char = element1.innerHTML; // Lấy số vừa click
      const calculation = document.querySelector(".box-calculation");
      $value_calculation = calculation.value; // Lấy chuỗi giá trị trong ô phép tính
      calculation.value = $value_calculation + $char; // Thêm số vừa click vào sau chuỗi giá trị trong ô phép tính

      removeAttr(".box-button button.operation", "disabled"); // Gỡ bỏ vô hiệu hoá các nút phép toán , nút bằng
      removeAttr(".box-button button.equal", "disabled");
    });
  });

  // Thực hiện các hành động bên trong khi click vào các nút dấu chấm
  const element2s = document.querySelectorAll(".box-button button.dot");
  element2s.forEach((element2) => {
    element2.addEventListener("click", () => {
      $char = element2.innerHTML; // lấy dấu chấm
      const calculation = document.querySelector(".box-calculation"); // Lấy chuỗi giá trị trong ô phép tính
      $value_calculation = calculation.value;
      calculation.value = $value_calculation + $char; // Thêm dấu chấm vào sau chuỗi giá trị trong ô phép tính
      addAttr(".box-button button.operation", "disabled", "true"); // Vô hiệu hoá các nút phép toán
      addAttr(".box-button button.dot", "disabled", "true"); // Vô hiệu hoá nút dấu chấm
    });
  });

  // Thực hiện các hành động bên trong khi click vào các nút CE
  const element3 = document.querySelector(".box-button button.refresh");
  element3.addEventListener("click", () => {
    const calculation = document.querySelector(".box-calculation"); // Làm trống ô phép tính
    calculation.value = "";

    const result = document.querySelector(".box-result"); // Làm trống ô kết quả
    result.value = "";
  });

  // Thực hiện các hành động bên trong khi click vào các nút Del
  const element4ss = document.querySelectorAll(".box-button button.del");
  element4ss.forEach((element4) => {
    element4.addEventListener("click", () => {
      const calculation = document.querySelector(".box-calculation");
      $string = calculation.value;
      calculation.value = $string.substring(0, $string.length - 1);
    });
  });

  // Thực hiện các hành động bên trong khi click vào các nút phép toán
  const element4s = document.querySelectorAll(".box-button button.operation");
  element4s.forEach((ele4) => {
    console.log(ele4, "1");
    ele4.addEventListener("click", () => {
      console.log(ele4, "2");
      $char = ele4.innerHTML; // Lấy dấu phép toán vừa click
      // $value_calculation = document.querySelector(".box-calculation").value(); // Lấy chuỗi giá trị trong ô phép tính

      const calculation = document.querySelector(".box-calculation"); // Lấy chuỗi giá trị trong ô phép tính
      $value_calculation = calculation.value;
      calculation.value = $value_calculation + $char; // Thêm dấu phép toán vừa click vào sau chuỗi giá trị trong ô phép tính

      addAttr(".box-button button.times", "disabled", "true"); // Vô hiệu hoá nút nhân
      addAttr(".box-button button.divide", "disabled", "true"); // Vô hiệu hoá nút chia
      removeAttr(".box-button button.dot", "disabled"); // Gỡ bỏ vô hiệu hoá nút dấu chấm
    });
  });

  // Thực hiện các hành động bên trong khi click vào các nút bằng
  const ele5s = document.querySelectorAll(".box-button button.equal");
  ele5s.forEach((ele5) => {
    ele5.addEventListener("click", () => {
      const calculation = document.querySelector(".box-calculation");
      $value_calculation = calculation.value;

      const result = document.querySelector(".box-result");
      result.value = eval($value_calculation);
    });
  });
