// API
var API = "http://localhost:27615";

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

  let dataSet = {
    uId: "",
    uTitle: title,
    uFname: fname,
    uLname: lname,
    uPosition: position,
    uType: TypeP,
    uSalaryid: idSalary,
    uStartdate: "",
    uSalary: 0,
    uLoan: 0,
    uAffiliation: positionJ,
    uTel: Tphone,
    uPhone: phone,
    uStatus: status,
    uDivision: "",
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
    const response = await axios.get(`${API}/api/usertables`);
    let Usertables = response.data;

    for (let index = 0; index < Usertables.length; index++) {
      const element = Usertables[index];
      const uFname = element.uFname;
      const uLname = element.uLname;

      if (uFname == fname && uLname == lname) {
        dataSet.uId = element.uId;
        dataSet.uStartdate = element.uStartdate;
        dataSet.uSalary = element.uSalary;
        dataSet.uDivision = element.uDivision;
      }
    }

    if (status == "สมรส") {
      location.href = "../User-2.html";
      sessionStorage.setItem("user1", JSON.stringify(dataSet));
    } else {
      location.href = "../User-3.html";
      sessionStorage.setItem("user1", JSON.stringify(dataSet));
    }
  }
}

function dateNow() {
  let timestamp = Date.now();
  let date = moment(timestamp).format("DD-MM");
  let yare_str = moment(timestamp).format("YYYY");
  let year = parseInt(yare_str) + 543;
  let sumDate = `${date}-${year}`;
  return sumDate;
}

function getYear() {
  let timestamp = Date.now();
  let yare_str = moment(timestamp).format("YYYY");
  let month_str = moment(timestamp).format("MM");
  let data = {
    yare: yare_str,
    month: month_str,
  };
  return data;
}

async function checkName() {
  let fname = document.getElementById("Fname").value;
  let lname = document.getElementById("Lname").value;
  let check_name = false;

  if (fname == "" || lname == "") {
    alert("กรุณาระบุข้อมูลให้ครบถ้วนและถูกต้อง");
  } else {
    const response = await axios.get(`${API}/api/usertables`);
    let Usertables = response.data;

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
      alert("ไม่พบข้อมูลของคุณในฐานข้อมูล");
    }
  }
}

async function checkName3() {
  let fname = document.getElementById("Fname").value;
  let lname = document.getElementById("Lname").value;
  let check_name = false;

  if (fname == "" || lname == "") {
    alert("กรุณาระบุข้อมูลให้ครบถ้วนและถูกต้อง");
  } else {
    const response = await axios.get(`${API}/api/usertables`);
    let Usertables = response.data;

    for (let index = 0; index < Usertables.length; index++) {
      const element = Usertables[index];
      const uFname = element.uFname;
      const uLname = element.uLname;
      if (uFname == fname && uLname == lname) {
        addDataByUser3(element);
        check_name = true;
      }
    }
    if (check_name == false) {
      alert("ไม่พบข้อมูลของคุณในฐานข้อมูล");
    }
  }
}

function addDataByUser1(ele) {
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

  let single = document.getElementById("customRadio").value;
  let marraige = document.getElementById("customRadio2").value;
  if (ele.uStatus == single) {
    document.getElementById("customRadio").checked = true;
  } else if (ele.uStatus == marraige) {
    document.getElementById("customRadio2").checked = true;
  } else {
    document.getElementById("customRadio3").checked = true;
  }

  let mr = document.getElementById("title1").value;
  let ms = document.getElementById("title2").value;
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

async function UserPage3() {
  let title = document.querySelector('input[name="title"]:checked').value;
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
    uId: "",
    uTitle: title,
    uFname: fname,
    uLname: lname,
    uPosition: position,
    uType: TypeP,
    uSalaryid: "",
    uStartdate: "",
    uSalary: salary,
    uLoan: 0,
    uAffiliation: positionJ,
    uTel: Tphone,
    uPhone: phone,
    uStatus: status,
    uDivision: idPo,
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
    const response = await axios.get(`${API}/api/usertables`);
    let Usertables = response.data;

    for (let index = 0; index < Usertables.length; index++) {
      const element = Usertables[index];
      const uFname = element.uFname;
      const uLname = element.uLname;

      if (uFname == fname && uLname == lname) {
        dataSet.uId = element.uId;
        dataSet.uSalaryid = element.uSalaryid;
        dataSet.uStartdate = element.uStartdate;
      }
    }

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

function setdataUser5() {
  let user1 = sessionStorage.getItem("user1");
  let parseUasr1 = JSON.parse(user1);
  document.getElementById("salary").value = parseUasr1.uSalary;
}

function UserPage5() {
  let salary = document.getElementById("salary").value;
  let total = document.getElementById("total").value;
  let Psalary = document.getElementById("Psalary").value;

  let user1 = sessionStorage.getItem("user1");
  let user3 = sessionStorage.getItem("user3");
  let parseUasr1 = JSON.parse(user1);
  let parseUasr3 = JSON.parse(user3);
  let date_U = parseUasr1.uStartdate.split("-");
  let date_S = parseUasr3.uStartdate.split("-");
  let yearNow = getYear();
  let result_year_U = parseInt(yearNow.yare) + 543 - parseInt(date_U[2]);
  let result_year_S = parseInt(yearNow.yare) + 543 - parseInt(date_S[2]);

  let moneyT = parseInt(salary) * 0.1;
  console.log(moneyT);
  console.log(total);

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
    if (parseInt(Psalary) <= 6000) {
      if (parseInt(total) >= moneyT) {
        if (result_year_U == 2) {
          if (parseInt(yearNow.month) > parseInt(date_U[1])) {
            location.href = "./UserConfirm.html";
          } else {
            alert("อายุงานของคุณไม่ถึง 2 ปี");
          }
        }
        if (result_year_S == 2) {
          if (parseInt(yearNow.month) > parseInt(date_S[1])) {
            location.href = "./UserConfirm.html";
          } else {
            alert("อายุงานของคุณไม่ถึง 2 ปี");
          }
        }
        if (result_year_U > 2 && result_year_S > 2) {
          sessionStorage.setItem("user5", JSON.stringify(dataSet));
          location.href = "./UserConfirm.html";
        } else {
          alert(
            "ระบบได้ทำการตรวจสอบแล้วคุณไม่อยู่ในเงื่อนไขที่สามารถกู้ยืมได้"
          );
        }
      } else {
        alert("เงินคงเหลือสุทธิของท่านน้อยกว่าเกณฑ์กำหนด 10%");
      }
    } else {
      alert("จำนวนเงินที่ขอกู้เกินเกณฑ์ที่กำหนดไว้");
    }
  }
}

async function UserConfirm() {
  let check = document.getElementById("myChecked").value;

  let user1 = sessionStorage.getItem("user1");
  let user2 = sessionStorage.getItem("user2");
  let user3 = sessionStorage.getItem("user3");
  let user4 = sessionStorage.getItem("user4");
  let user5 = sessionStorage.getItem("user5");
  // console.log(user2);
  // console.log(user3);
  // console.log(user4);
  // console.log(user5);

  let getUsertables = `${API}/api/usertables`;
  if (user1 != null) {
    parseUasr1 = JSON.parse(user1);
    let id = parseUasr1.uId;
    // console.log(parseUasr1);
    // console.log(id);

    // Send a POST request
    // await axios.put(`${getUsertables}/${id}`, parseUasr1);
  }

  if (user2 != null) {
    console.log("user2");
    parseUasr2 = JSON.parse(user2);
    console.log(parseUasr2);
  }

  if (user3 != null) {
    parseUasr3 = JSON.parse(user3);
    let id = parseUasr3.uId;
    // console.log(parseUasr3);
    // console.log(id);

    // Send a POST request
    // await axios.put(`${getUsertables}/${id}`, parseUasr3);
  }

  if (user4 != null) {
    console.log("user4");
    parseUasr4 = JSON.parse(user4);
    console.log(parseUasr4);
  }

  if (user5 != null) {
    console.log("user5");
    parseUasr5 = JSON.parse(user5);
    console.log(parseUasr5);
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

function confirmPaper() {
  location.href = "./confirmPaper.html";
}
