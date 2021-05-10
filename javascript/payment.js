// API
var API = "http://localhost:27615";

async function Userlogin() {
  let fname = document.getElementById("Fname").value;
  let lname = document.getElementById("Lname").value;
  let phone = document.getElementById("phone").value;
  let TypeP = $("#TypeP option:selected").val();

  const pament_user = sessionStorage.getItem("pament_user");

  if (pament_user != null) {
    sessionStorage.removeItem("pament_user");
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
          sessionStorage.setItem("pament_user", JSON.stringify(element));
          location.href = "./paymentU.html";
        }
      }
    } else {
      console.log("ไม่พบข้อมูล");
    }
  }
}

async function getdataPaymentU() {
  let pament_user = sessionStorage.getItem("pament_user");
  let pay_user = JSON.parse(pament_user);
  let id = pay_user.uId;
  const response = await axios.get(`${API}/api/Paymenttables`);
  const subpay_user = sessionStorage.getItem("subpay_user");

  if (subpay_user != null) {
    sessionStorage.removeItem("subpay_user");
  }

  if (response.data.length > 0) {
    let ele = "";
    for (let index = 0; index < response.data.length; index++) {
      const element = response.data[index];
      if (element.uId == id) {
        ele = element;
      }
    }
    let money_space = ele.batchamount;
    let balance = ele.balance;

    if (ele != "") {
      document.getElementById("batchamount").value = money_space;
      document.getElementById("total").value = balance;
      sessionStorage.setItem("subpay_user", JSON.stringify(ele));
    }
  }
}

async function cash() {
  let moneypay = document.getElementById("moneypay").value;
  let subpay_user = sessionStorage.getItem("subpay_user");
  let subPay = JSON.parse(subpay_user);

  if (moneypay == "") {
    console.log("ใส่จำนวนเงินสิ");
  } else {
    let getPaymenttableById = `${API}/api/Paymenttables/${subPay.kPaymentt}`;
    const response = await axios.get(getPaymenttableById);
    let data = response.data;
    let parseMoney = parseInt(moneypay);

    let check_balance = data.total - data.balance;
    console.log(check_balance);
    // if (check_balance < data.batchamount) {
    //   console.log(data);
    // }

    if (data.balance < data.batchamount) {
      data.lastpaid = parseMoney;
      data.total = data.total + parseMoney;
      data.balance = data.balance - data.lastpaid;

      // Send a PUT request
      await axios.put(getPaymenttableById, data);
      location.href = "./paymentU.html";
    } else if (parseMoney >= data.batchamount) {
      data.lastpaid = parseMoney;
      data.total = data.total + parseMoney;
      data.balance = data.balance - data.lastpaid;

      // Send a PUT request
      await axios.put(getPaymenttableById, data);
      location.href = "./paymentU.html";
    } else {
      console.log("จ่ายไม่ได้");
    }
  }
}
