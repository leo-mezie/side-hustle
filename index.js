

function formvalidate(){
    
    let name = document.forms.RegForm.fullName;
    let email = document.forms.RegForm.Email;
    let phone = document.forms.RegForm.Phone;
    let gender = document.forms.RegForm.gender;
    let password = document.forms.RegForm.password;



    // var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  //Javascript reGex for Email Validation.
    // let regPhone=/^\d{11}$/;                                        // Javascript reGex for Phone Number validation.
    let regName = /\d+$/g;                                    // Javascript reGex for Name validation
  
    if (name.value === "" || regName.test(name)) {
        alert("Please enter your name properly.");
        name.focus();
        return false;
    }

      
    if (email.value === " " ) {
        alert("Please enter your email address.");
        email.focus();
        return false;
    }
       

   
    if (gender.value === "" ) {
        alert("Please select gender");
        // gender.focus();
        return false;
    }


    if (password.value === "") {
        alert("Please enter your password");
        password.focus();
        return false;
    }
  
    if(password.length <6){
        alert("Password should be atleast 6 character long");
        password.focus();
        return false;
  
    }
    
    if (phone.value === "" ) {
        alert("Please enter valid phone number.");
        phone.focus();
        return false;
    }
  else{
    alert("You Have Successfully Submitted Your Form");
  
    return true;
  }
}




// email validation with regular expression

function emailvalidate(){

    var emailtxt = document.getElementById('Email');

    var mainemail = emailtxt.value;
    var regexpres = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    //testing the regular expression for the email in email txtbox (regexpres.test(mainemail))
    if(regexpres.test(mainemail))
    {
        // errormsg.style.display="none";
        emailtxt.style.borderColor = "green";
        emailtxt.style.boxShadow ="3px 2px 4px green";
    }else {
        
        emailtxt.style.borderColor = "red";
        emailtxt.style.boxShadow ="3px 2px 4px red";
        emailtxt.focus();
    }
   
    return false;
    
    }













// function successMsg(){
//     // e.preventDefault()

//     alert("You Have Successfully Submitted Your Form");
// }


