console.log("its runnung")

let fullName , emaiId, country, phoneNo, presentAddress, parmanentAddress ;

function _(x){
    return document.getElementById(x);
}

//Div driver start
function login(){
    _("login").style.display ="block";
    _("LoginRegister").style.display ="none";
}

function loginAs(catagory){
    _("loginForm").style.display ="block";
    _("login").style.display ="none";
}

function register(){
    _("register").style.display ="block";
    _("LoginRegister").style.display ="none";
}

function registerAs(catagory){
    _("register").style.display ="none";
    _("phase1").style.display ="block";

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
        _("showAllData").style.display = "block";

        // console.log ("processPhase4");
        // _("showFullName").innerHTML = fullName;
        // _("showEmailID").innerHTML = emailId;
        // _("showCountry").innerHTML = country;
        // _("showPhoneNo").innerHTML = phoneNo;
        // _("showPresentAddress").innerHTML = presentAddress;
        // _("showParmanentAddress").innerHTML = parmanentAddress;
        // console.log ("processPhase4");

    } else{
        alert("please fill in the field");
    }
}

function submitForm(){
	
}

// Form multiphase end