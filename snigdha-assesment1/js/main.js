function EnableDisable(sixth){
    var btnsubmit=document.getElementById("btnsubmit");
    if(first.value.trim() !==""&&second.value.trim() !==""&&third.value.trim() !==""&&fourth.value.trim() !==""&&fifth.value.trim() !==""&&sixth.value.trim() !==""){
        btnsubmit.disabled=false;
        btnsubmit.style.background = '#FBF12C  ';
        btnsubmit.style.color='blue';
    }else{
        btnsubmit.disabled=true;
    }
};
    
function myFunction(){
    alert("succesfully verified your number");
}