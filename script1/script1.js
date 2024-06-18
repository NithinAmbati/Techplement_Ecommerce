
let signupBtna = document.getElementById("signupBtna");
let signinBtna = document.getElementById("signinBtna");
let nameFielda = document.getElementById("nameFielda");
let lostPassword = document.getElementById('lostPassword');
let account = document.getElementById('account');
let titlea = document.getElementById("titlea");

signinBtna.onclick = function () {
    nameFielda.style.maxHeight = "0";
    titlea.innerHTML = "Log in to Exclusive";
    signupBtna.classList.add("disable");
    signinBtna.classList.remove("disable");
    lostPassword.style.display = 'block';
    account.style.display = 'none';
    signinBtna.onclick=function() 
 	 {
		 signinBtna.type="submit";
		 
 	 }
}

signupBtna.onclick = function () {
    nameFielda.style.maxHeight = "60px";
    titlea.innerHTML = "Create an account";
    signupBtna.classList.remove("disable");
    signinBtna.classList.add("disable");
    account.style.display = 'block';
    lostPassword.style.display = 'none';
	signupBtna.onclick=function() 
 	 {
		 signupBtna.type="submit";
		 
	 }
}
