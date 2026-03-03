// Cursor glow movement
const glow=document.querySelector(".cursor-glow");
document.addEventListener("mousemove",e=>{
if(glow){
glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";
}
});

// Smooth page transition
document.querySelectorAll("a").forEach(link=>{
link.addEventListener("click",function(e){
if(this.href.includes(".html")){
e.preventDefault();
document.body.style.opacity=0;
setTimeout(()=>window.location=this.href,300);
}
});
});