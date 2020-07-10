console.log("its runnung")

let fullName , emaiId, country, phoneNo, presentAddress, parmanentAddress ;

function _(x){
    return document.getElementById(x);
}

//Div driver start
function login(){
    _("login").style.display ="block";
    _("register").style.display ="none";
}

function loginAs(catagory){
    if(catagory === "Client"){
        console.log(catagory);
    }else{
        console.log("member");
    }
    _("loginForm").style.display ="block";
    _("login").style.display ="none";
    _("LoginRegister").style.display ="none";
}

function register(){
    _("register").style.display ="block";
    _("login").style.display ="none";
}

function registerAs(catagory){
    if(catagory === "Client"){
        console.log(catagory);
    }else{
        console.log("member");
    }
    _("register").style.display ="none";
    _("phase1").style.display ="block";
    _("LoginRegister").style.display ="none";

}

//Div driver End

//note processPhaseN() can be done by class and object . it need to try... otherwise its ok

// Form multiphase start
function processPhase1(){
    fullName = _("fullName").value;
    emailId   = _("emailId").value;
    // need email validation(regx) function rather then if else
    if(fullName.length > 4 && emailId.length > 4){
        _("phase1").style.display ="none";
        _("phase2").style.display ="block";

    } else{
        alert("please fill in the field");
    }
} 
function processPhase2(){
    country = _("country").value;
    phoneNo   = _("phoneNo").value;
    // need Phone no validation(regx) function rather then if else
    if(country.length > 4 && phoneNo.length > 4){
        _("phase2").style.display ="none";
        _("phase3").style.display ="block";

    } else{
        alert("please fill in the field");
    }
} 
function processPhase3(){
    presentAddress = _("presentAddress").value;
    parmanentAddress   = _("parmanentAddress").value;
    // need Phone no validation(regx) function rather then if else
    if(presentAddress.length > 4 && parmanentAddress.length > 4){
        _("phase3").style.display ="none";
        _("phase4").style.display ="block";

    } else{
        alert("please fill in the field");
    }
} 
function processPhase4(){
    photo = _("photo").value;
    validationId   = _("validationId").value;
	if(photo.length > 4 && validationId.length > 4){
        _("phase4").style.display ="none";
        submitForm();

    } else{
        alert("please fill in the field");
    }
}

function submitForm(){
    console.log (fullName, emailId ,country,phoneNo,presentAddress,parmanentAddress);
    
    _("multiphase").method = "post";
	_("multiphase").action = "controller.php";
	_("multiphase").submit();
}

// Form multiphase end