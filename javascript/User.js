// var Finalla = "https://localhost:5001/weatherforecast";
// console.log(Finalla);
// $.get(Finalla, function (datafinal) {
//   console.log(datafinal);
// });
function UserPage1() {
  let fname = document.getElementById("Fname").value;
  let lname = document.getElementById("Lname").value;
  let position = document.getElementById("position").value;
  let TypeP = $("#TypeP option:selected").val();
  let positionJ = document.getElementById("positionJ").value;
  let idSalary = document.getElementById("idSalary").value;
  let phone = document.getElementById("phone").value;
  let Tphone = document.getElementById("Tphone").value;
  let status = document.querySelector('input[name="status"]:checked').value;
  if (
    fname == "" ||
    lname == "" ||
    position == "" ||
    TypeP == "0" ||
    positionJ == "" ||
    idSalary == "" ||
    phone == "" ||
    Tphone == ""
  ) {
    alert("กรุณาระบุข้อมูลให้ครบถ้วนและถูกต้อง");
  } else {
    if (status == "โสด" || status == "หม้าย") {
        location.href = '../User-3.html';
    } else {
        location.href = '../User-2.html';

    }
  }
}

function checkName() {
  let fname = document.getElementById("Fname").value;
  let lname = document.getElementById("Lname").value;

}

function UserPage2() {
  let fname = document.getElementById("Fname").value;
  let lname = document.getElementById("Lname").value;
  let phone = document.getElementById("phone").value;
  let Tphone = document.getElementById("Tphone").value;
  let salary = document.getElementById("salary").value;

  if (
    fname == "" ||
    lname == "" ||
    phone == "" ||
    Tphone == ""||
    salary == ""
  ) {
    alert("กรุณาระบุข้อมูลให้ครบถ้วนและถูกต้อง");
  }
}


function UserPage3() {
  let fname = document.getElementById("Fname").value;
  let lname = document.getElementById("Lname").value;
  let position = document.getElementById("position").value;
  let TypeP = $("#TypeP option:selected").val();
  let positionJ = document.getElementById("positionJ").value;
  let idPo= document.getElementById("idPo").value;
  let phone = document.getElementById("phone").value;
  let Tphone = document.getElementById("Tphone").value;
  let salary = document.getElementById("salary").value;
  let status = document.querySelector('input[name="status"]:checked').value;
  if (
    fname == "" ||
    lname == "" ||
    position == "" ||
    TypeP == "0" ||
    positionJ == "" ||
    idPo == "" ||
    phone == "" ||
    Tphone == ""||
    salary == ""
  ) {
    alert("กรุณาระบุข้อมูลให้ครบถ้วนและถูกต้อง");
   }
   else {
    if (status == "สมรส") {
     location.href="./User-4.html";
    } else {
      location.href="./User-5.html";
    }
  }
}

function UserPage4() {
  let fname = document.getElementById("Fname").value;
  let lname = document.getElementById("Lname").value;
  let phone = document.getElementById("phone").value;
  let Tphone = document.getElementById("Tphone").value;
  let salary = document.getElementById("salary").value;

  if (
    fname == "" ||
    lname == "" ||
    phone == "" ||
    Tphone == ""||
    salary == ""
  ) {
    alert("กรุณาระบุข้อมูลให้ครบถ้วนและถูกต้อง");
  }
}

function UserPage5() {
 
  let total = document.getElementById("total").value;
  let Psalary = document.getElementById("Psalary").value;
  let salary = document.getElementById("salary").value;

  if (
    total == "" ||
    Psalary == ""||
    salary == ""
  ) {
    alert("กรุณาระบุข้อมูลให้ครบถ้วนและถูกต้อง");
  }else{
    location.href="./UserConfirm.html";
  }
}

function UserConfirm() {
  let check = document.getElementById("myChecked").value;
  if (
    check == true
  ) {
    location.href="./index.html";
    
  }else{
    alert("กรุณาตรวจสออบเงื่อนไขให้ถูกต้องถูกต้อง");
  }
}

function UserCancel() {
  
    location.href="./index.html";
    
 
}