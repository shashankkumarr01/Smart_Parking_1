const container = document.getElementById("slotsContainer");
const statuses = ["available","occupied","reserved"];
let selectedSlot = null;

for(let i=1;i<=30;i++){

let slot = document.createElement("div");
let status = statuses[Math.floor(Math.random()*3)];

slot.className="slot "+status;
slot.innerText="S"+i;

slot.onclick = function(){
const role = checkRole();

if(role === "staff" || role === "admin"){
if(status === "available"){
selectedSlot = slot;
openModal();
}
}else{
alert("Only Staff/Admin can reserve slots.");
}
};

container.appendChild(slot);
}

function openModal(){
document.getElementById("modal").style.display="flex";
}

function closeModal(){
document.getElementById("modal").style.display="none";
}

function confirmReservation(){
selectedSlot.classList.remove("available");
selectedSlot.classList.add("reserved");
closeModal();
}