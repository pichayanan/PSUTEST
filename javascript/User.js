// API
var API = "http://localhost:5000";

async function UserPage1() {
  let title = document.querySelector('input[name="title"]:checked').value;
  let fname = document.getElementById("Fname").value;
  let lname = document.getElementById("Lname").value;
  let position = document.getElementById("position").value;
  let TypeP = $("#TypeP option:selected").val();
  let positionJ = document.getElementById("positionJ").value;
  let idSalary = document.getElementById("idSalary").value;
  let phone = document.getElementById("phone").value;
  let Tphone = document.getElementById("Tphone").value;
  let status = document.querySelector('input[name="status"]:checked').value;

  console.log("cccc", title);
  let dataSet = {
    uId: "",
    uTitle: title,
    uFname: fname,
    uLname: lname,
    uPosition: position,
    uType: TypeP,
    uSalaryid: idSalary,
    uStartdate: "",
    uSalary: 22090,
    uLoan: "",
    uAffiliation: positionJ,
    uTel: Tphone,
    uPhone: phone,
    uStatus: status,
    uDivision: "ว่าง",
    marriagetable: "",
  };

  const user1 = sessionStorage.getItem("user1");
  const user2 = sessionStorage.getItem("user2");
  if (user1 != null) {
    sessionStorage.removeItem("user1");
  }

  if (user2 != null) {
    sessionStorage.removeItem("user2");
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
    let getUsertables = `${API}/api/usertables`;
    $.get(getUsertables, async function (Usertables) {
      for (let index = 0; index < Usertables.length; index++) {
        const element = Usertables[index];
        const uFname = element.uFname;
        const uLname = element.uLname;

        if (uFname == fname && uLname == lname) {
          console.log(element);
          dataSet.uId = element.uId;
        }
      }
      if (status == "สมรส") {
        location.href = "../User-2.html";
        sessionStorage.setItem("user1", JSON.stringify(dataSet));
      } else {
        location.href = "../User-3.html";
        sessionStorage.setItem("user1", JSON.stringify(dataSet));
      }
    });
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

function checkName3() {
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
        const uPosition = element.uPosition;
        // const uLname = element.uLname;
        // console.log(element);
        if (uFname == fname && uLname == lname) {
          addDataByUser3(element);
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

  var mr = document.getElementById("title1").value;
  var ms = document.getElementById("title2").value;
  if (ele.uTitle == mr) {
    document.getElementById("title1").checked = true;
  } else if (ele.uTitle == ms) {
    document.getElementById("title2").checked = true;
  } else {
    document.getElementById("title3").checked = true;
  }
}

function addDataByUser3(ele) {
  console.log(ele);
  let select = document.all;

  document.getElementById("position").value = ele.uPosition;
  if (select.TypeP.value == "0") {
    select.TypeP.value = ele.uType;
  }

  document.getElementById("positionJ").value = ele.uAffiliation;
  document.getElementById("salary").value = ele.uSalary;
  document.getElementById("idPo").value = ele.uDivision;
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

  var mr = document.getElementById("title1").value;
  var ms = document.getElementById("title2").value;
  if (ele.uTitle == mr) {
    document.getElementById("title1").checked = true;
  } else if (ele.uTitle == ms) {
    document.getElementById("title2").checked = true;
  } else {
    document.getElementById("title3").checked = true;
  }
}

function UserPage2() {
  let fname = document.getElementById("Fname").value;
  let lname = document.getElementById("Lname").value;
  let phone = document.getElementById("phone").value;
  let Tphone = document.getElementById("Tphone").value;
  let salary = document.getElementById("salary").value;

  let dataSet = {
    u2_fname: fname,
    u2_lname: lname,
    u2_phone: phone,
    u2_Tphone: Tphone,
    u2_salary: salary,
  };

  if (
    fname == "" ||
    lname == "" ||
    phone == "" ||
    Tphone == "" ||
    salary == ""
  ) {
    alert("กรุณาระบุข้อมูลให้ครบถ้วนและถูกต้อง");
  } else {
    location.href = "../User-3.html";
    sessionStorage.setItem("user2", JSON.stringify(dataSet));
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

  let dataSet = {
    u3_fname: fname,
    u3_lname: lname,
    u3_position: position,
    u3_TypeP: TypeP,
    u3_positionJ: positionJ,
    u3_idPo: idPo,
    u3_phone: phone,
    u3_Tphone: Tphone,
    u3_salary: salary,
    u3_status: status,
  };

  const user3 = sessionStorage.getItem("user3");
  const user4 = sessionStorage.getItem("user4");

  if (user3 != null) {
    sessionStorage.removeItem("user3");
  }

  if (user4 != null) {
    sessionStorage.removeItem("user4");
  }

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
      sessionStorage.setItem("user3", JSON.stringify(dataSet));
      location.href = "./User-4.html";
    } else {
      sessionStorage.setItem("user3", JSON.stringify(dataSet));
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

  let dataSet = {
    u4_fname: fname,
    u4_lname: lname,
    u4_phone: phone,
    u4_Tphone: Tphone,
    u4_salary: salary,
  };

  if (
    fname == "" ||
    lname == "" ||
    phone == "" ||
    Tphone == "" ||
    salary == ""
  ) {
    alert("กรุณาระบุข้อมูลให้ครบถ้วนและถูกต้อง");
  } else {
    sessionStorage.setItem("user4", JSON.stringify(dataSet));
  }
}

function UserPage5() {
  let total = document.getElementById("total").value;
  let Psalary = document.getElementById("Psalary").value;
  let salary = document.getElementById("salary").value;

  let dataSet = {
    u5_total: total,
    u5_Psalary: Psalary,
    u5_salary: salary,
  };

  const user5 = sessionStorage.getItem("user5");

  if (user5 != null) {
    sessionStorage.removeItem("user5");
  }

  if (total == "" || Psalary == "" || salary == "") {
    alert("กรุณาระบุข้อมูลให้ครบถ้วนและถูกต้อง");
  } else {
    sessionStorage.setItem("user5", JSON.stringify(dataSet));
    location.href = "./UserConfirm.html";
  }
}

async function UserConfirm() {
  let check = document.getElementById("myChecked").value;

  let user1 = sessionStorage.getItem("user1");
  let user2 = sessionStorage.getItem("user2");
  let user3 = sessionStorage.getItem("user3");
  let user4 = sessionStorage.getItem("user4");
  let user5 = sessionStorage.getItem("user5");
  console.log(user1);
  console.log(user2);
  console.log(user3);
  console.log(user4);
  console.log(user5);

  let getUsertables = `${API}/api/usertables`;
  if (user1 != null) {
    parseUasr1 = JSON.parse(user1);
    console.log(parseUasr1);
    let id = parseUasr1.uId;
    console.log(id);

    let data = {
      marriagetable: parseUasr1.marriagetable,
      uAffiliation: parseUasr1.uAffiliation,
      uDivision: parseUasr1.uDivision,
      uFname: parseUasr1.uFname,
      uLname: parseUasr1.uLname,
      uLoan: parseUasr1.uLoan,
      uPhone: parseUasr1.uPhone,
      uPosition: parseUasr1.uPosition,
      uSalary: parseUasr1.uSalary,
      uSalaryid: parseUasr1.uSalaryid,
      uStartdate: parseUasr1.uStartdate,
      uStatus: parseUasr1.uStatus,
      uTel: parseUasr1.uTel,
      uTitle: parseUasr1.uTitle,
      uType: parseUasr1.uType,
    };
    let raw = await JSON.stringify(data);

    let getUsertablesById = `${getUsertables}/${id}`;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("PUT", getUsertablesById);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(raw);
  }

  if (user2 != null) {
    console.log("ppllpp2");
  }

  if (check == true) {
    location.href = "./index.html";
  } else {
    alert("กรุณาตรวจสอบเงื่อนไขให้ถูกต้อง");
  }
}

function UserCancel() {
  location.href = "./index.html";
}

function Adminlogin() {
  let username = document.getElementById("username").value;
  let pwd = document.getElementById("pwd").value;

  if (username == "Admin" && pwd == "Admin123") {
    location.href = "./AdminHome.html";
  } else {
    alert("กรุณาตรวจสอบเงื่อนไขให้ถูกต้อง");
  }
}

function Userlogin() {
  let Fname = document.getElementById("Fname").value;
  let Lname = document.getElementById("Lname").value;
  let idcard = document.getElementById("idcard").value;
  let TypeP = $("#TypeP option:selected").val();

  if (Fname == "" || Lname == "" || idcard == "" || TypeP == "0") {
    alert("กรุณาระบุข้อมูลให้ถูกต้อง");
  } else {
    location.href = "./tableUser.html";
  }
}
