// var Finalla = "https://localhost:5001/weatherforecast";
// console.log(Finalla);
// $.get(Finalla, function (datafinal) {
//   console.log(datafinal);
// });
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
    alert("ใส่ข้อมูลให้ถูกหิดที");
  } else {
    if (status == "โสด" || status == "หม้าย") {
        location.href = '../User-3.html';
    } else {
        location.href = '../User-2.html';

    }
  }
}
