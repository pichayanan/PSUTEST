// API
var API = "http://localhost:5000";

function test() {
  let fname = document.getElementById("Fname").value;
  let lname = document.getElementById("Lname").value;
  let position = document.getElementById("position").value;
  let TypeP = $("#TypeP option:selected").val();
  let positionJ = document.getElementById("positionJ").value;
  let idSalary = document.getElementById("idSalary").value;
  let phone = document.getElementById("phone").value;
  let Tphone = document.getElementById("Tphone").value;
  let status = document.querySelector('input[name="status"]:checked').value;

  let dataSet = {
    u1_fname: fname,
    u1_lname: lname,
    u1_position: position,
    u1_TypeP: TypeP,
    u1_positionJ: positionJ,
    u1_idSalary: idSalary,
    u1_phone: phone,
    u1_Tphone: Tphone,
    u1_status: status,
  };

  const user1 = sessionStorage.getItem("user1");
  if (user1 != null) {
    sessionStorage.removeItem("user1");
  }

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
      location.href = "../User-3.html";
    } else {
      location.href = "../User-2.html";
      sessionStorage.setItem("user1", JSON.stringify(dataSet));
    }
  }
}

function checkName() {
  let fname = document.getElementById("Fname").value;
  let lname = document.getElementById("Lname").value;
  let check_name = false;

  if (fname == "" || lname == "") {
    console.log("ใส่ข้อมูลก่อนตะ");
  } else {
    let getUsertables = `${API}/api/usertables`;
    $.get(getUsertables, function (Usertables) {
      for (let index = 0; index < Usertables.length; index++) {
        const element = Usertables[index];
        const uFname = element.uFname;
        const uLname = element.uLname;

        if (uFname == fname && uLname == lname) {
          addDataByUser1(element);
          check_name = true;
        }
      }
      if (check_name == false) {
        console.log("ไม่มีข้อมูลที่ตรงกัน");
      }
    });
  }
}

function addDataByUser1(ele) {
  console.log(ele);
  let select = document.all;

  document.getElementById("position").value = ele.uPosition;
  if (select.TypeP.value == "0") {
    select.TypeP.value = ele.uType;
  }

  document.getElementById("positionJ").value = ele.uAffiliation;
  document.getElementById("idSalary").value = ele.uSalaryid;
  document.getElementById("phone").value = ele.uPhone;
  document.getElementById("Tphone").value = ele.uTel;

  var single = document.getElementById("customRadio").value;
  var marraige = document.getElementById("customRadio2").value;
  if (ele.uStatus == single) {
    document.getElementById("customRadio").checked = true;
  } else if (ele.uStatus == marraige) {
    document.getElementById("customRadio2").checked = true;
  } else {
    document.getElementById("customRadio3").checked = true;
  }
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
    Tphone == "" ||
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
  let idPo = document.getElementById("idPo").value;
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
    Tphone == "" ||
    salary == ""
  ) {
    alert("กรุณาระบุข้อมูลให้ครบถ้วนและถูกต้อง");
  } else {
    if (status == "สมรส") {
      location.href = "./User-4.html";
    } else {
      location.href = "./User-5.html";
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
    Tphone == "" ||
    salary == ""
  ) {
    alert("กรุณาระบุข้อมูลให้ครบถ้วนและถูกต้อง");
  }
}

function UserPage5() {
  let total = document.getElementById("total").value;
  let Psalary = document.getElementById("Psalary").value;
  let salary = document.getElementById("salary").value;

  if (total == "" || Psalary == "" || salary == "") {
    alert("กรุณาระบุข้อมูลให้ครบถ้วนและถูกต้อง");
  } else {
    location.href = "./UserConfirm.html";
  }
}

function UserConfirm() {
  let check = document.getElementById("myChecked").checked;

  if (total == "" || Psalary == "" || salary == "") {
    alert("กรุณาระบุข้อมูลให้ครบถ้วนและถูกต้อง");
  } else {
    location.href = "./UserConfirm.html";
  }
}
