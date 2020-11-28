function generatePassword() {
  // var length = window.prompt("enter length: ");
  var length = 15;
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789{}()![]@#$%^&*-=+|?/1234567890",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    console.log(retVal);
  document.getElementById("password").value=retVal;
  
}


function copyPassword(){
   var copyText = document.getElementById("password");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");
  document.getElementById("copied").textContent = "Password copied: " + copyText.value;
}
