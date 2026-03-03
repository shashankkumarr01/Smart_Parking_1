function registerUser(){

const role = document.getElementById("role").value;
const staffId = document.getElementById("staffId").value;

if(role === "staff" && staffId.trim() === ""){
alert("Staff ID is required!");
return;
}

localStorage.setItem("userRole", role);
alert("Registered Successfully!");
window.location.href="dashboard.html";
}

function checkRole(){
return localStorage.getItem("userRole");
}