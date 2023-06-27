var email=document.getElementsByClassName('field1')
var err=document.getElementById('err')
var regex=/^([A-Za-z0-9\-#_.]+)@([A-Za-z0--9\-]+).([a-z]{2,3})?$/

function validityEmail(){
    if (email.value.trim()==''){
        err.innerText="";
        email.style.border='6px solid red'
        return false
    }
    else if(email.value.match(regex)){
        err1.innerText='Email is not incorrect formate'
        email.style.border='3px solid red'
        return false
    }
    else{
        err1.innerText=""
        email.style.border
    }


}
    
