// API
var API = "http://localhost:27615";

async function Userlogin() {
  let fname = document.getElementById("Fname").value;
  let lname = document.getElementById("Lname").value;
  let phone = document.getElementById("phone").value;
  let TypeP = $("#TypeP option:selected").val();

  const total_user = sessionStorage.getItem("total_user");

  if (total_user != null) {
    sessionStorage.removeItem("total_user");
  }

  if (fname == "" || lname == "" || phone == "") {
    console.log("no data");
  } else {
    if (TypeP == 0) {
      console.log("เลื่อก type ด้วย");
    } else if (TypeP == 12) {
      console.log("มีข้อมูล");
      const response = await axios.get(`${API}/api/usertables`);
      let Usertables = response.data;
      console.log(Usertables);
      for (let index = 0; index < Usertables.length; index++) {
        const element = Usertables[index];
        const uFname = element.uFname;
        const uLname = element.uLname;
        const uPhone = element.uPhone;

        if (uFname == fname && uLname == lname && uPhone == phone) {
          console.log(element);
          sessionStorage.setItem("total_user", JSON.stringify(element));
          location.href = "./tableUser.html";
        }
      }
    } else {
      console.log("ไม่พบข้อมูล");
    }
  }
}

async function setmoney_space() {
  let total_user = sessionStorage.getItem("total_user");
  let total = JSON.parse(total_user);
  let id = total.uId;
  const response = await axios.get(`${API}/api/paymenttables`);

  if (response.data.length > 0) {
    let data = [];
    let ele = "";
    for (let index = 0; index < response.data.length; index++) {
      const element = response.data[index];
      if (element.uId == id) {
        ele = element;
      }
    }

    let space = parseInt(ele.batch);
    let money_space = ele.batchamount;
    let total = ele.total;
    let balance = ele.balance;

    for (let index = 0; index < space; index++) {
      let space_index = index + 1;
      data.push(`<tr>
                <td>${space_index}</td>
                <td>${money_space}</td>
                </tr>`);
    }
    $("#data_space").append();
    let table = `${data}`;
    $("#data_space").append(table);

    document.getElementById("total").value = total;
    document.getElementById("balance").value = balance;
  }
}

function back() {
  location.href = "./index.html";
}