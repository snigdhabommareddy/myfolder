var Modal=document.getElementById("#choclate");
var CloseBtn=document.querySelector(".close");
Modal.addEventListener("click",popup)
CloseBtn.addEventListener("click",closed)
function popup(){
   document.querySelector(".popup").style.display="flex";
  
}
function closed(){
    document.querySelector(".popup").style.display="none";
   
}



