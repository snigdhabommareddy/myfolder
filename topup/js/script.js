function EnableDisable(flexRadioDefault1){
    var btnsubmit=document.getElementById("btnsubmit");
    if(flexRadioDefault1.value.trim() !==""){
        btnsubmit.disabled=false;
        btnsubmit.style.background = 'orange';
        btnsubmit.style.color='white';
        btnsubmit.style.borderColor="orange";
    }else{
        btnsubmit.disabled=true;
    }
};