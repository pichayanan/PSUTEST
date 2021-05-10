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
    alert("กรุณาระบุข้อมูลให้ถูกต้อง");
  } else {
    if (TypeP == 0) {
      alert("กรุณาระบุประเภทที่ทำการกู้");
    } else if (TypeP == 12) {
      
      const response = await axios.get(`${API}/api/usertables`);
      let Usertables = response.data;
      // console.log(Usertables);
      for (let index = 0; index < Usertables.length; index++) {
        const element = Usertables[index];
        const uFname = element.uFname;
        const uLname = element.uLname;
        const uPhone = element.uPhone;

        if (uFname == fname && uLname == lname && uPhone == phone) {
          // console.log(element);
          sessionStorage.setItem("pament_user", JSON.stringify(element));
          location.href = "./tableUser.html";
        }
      }
    } else {
      alert("ไม่พบข้อมูลของท่านในฐานข้อมูล");
    }
  }
}
